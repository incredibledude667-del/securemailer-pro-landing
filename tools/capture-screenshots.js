const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");
const { chromium } = require("playwright");

const root = path.resolve(__dirname, "..");
const outDir = path.join(root, "qa-screenshots");
const port = 4175;
const baseUrl = `http://127.0.0.1:${port}`;

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function waitForServer(page) {
  const started = Date.now();
  while (Date.now() - started < 10000) {
    try {
      const response = await page.goto(baseUrl, { waitUntil: "networkidle", timeout: 1500 });
      if (response && response.ok()) return;
    } catch (_) {
      await wait(250);
    }
  }
  throw new Error(`Local server did not start on ${baseUrl}`);
}

async function main() {
  fs.mkdirSync(outDir, { recursive: true });

  const server = spawn("python3", ["-m", "http.server", String(port)], {
    cwd: root,
    stdio: "ignore",
  });

  let browser;
  try {
    browser = await chromium.launch({ channel: "chrome" });
    const page = await browser.newPage({ viewport: { width: 1440, height: 1100 }, deviceScaleFactor: 1 });
    await waitForServer(page);
    await page.evaluate(() => {
      document.querySelectorAll("[data-reveal]").forEach((node) => node.classList.add("is-visible"));
    });

    await page.evaluate(() => window.scrollTo(0, 0));
    await page.screenshot({ path: path.join(outDir, "desktop-home.png"), fullPage: false });

    await page.evaluate(() => {
      const reports = document.querySelector("#reports");
      window.scrollTo(0, Math.max(0, (reports?.offsetTop || 0) - 120));
    });
    await wait(500);
    await page.screenshot({ path: path.join(outDir, "desktop-reports.png"), fullPage: false });

    const mobile = await browser.newPage({
      viewport: { width: 390, height: 900 },
      deviceScaleFactor: 2,
      isMobile: true,
    });
    await mobile.goto(baseUrl, { waitUntil: "networkidle" });
    await mobile.evaluate(() => window.scrollTo(0, 0));
    await mobile.screenshot({ path: path.join(outDir, "mobile-home.png"), fullPage: false });

    console.log(`Screenshots saved to ${outDir}`);
  } finally {
    if (browser) await browser.close();
    server.kill();
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
