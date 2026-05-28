# SecureMailer Landing

Static landing page: no build, no backend, no npm.

## Before publishing

Open `site.config.js` and set one of these:

```js
contactUrl: "https://t.me/teambaxyz",
developerUrl: "https://t.me/pireaumonde1"
```

Optional fallback:

```js
contactEmail: "your@email.com"
```

## Local preview

```bash
python3 -m http.server 8080
```

Then open:

```text
http://localhost:8080
```

## Free hosting options

Recommended: GitHub Pages.

Other free static hosting options: Cloudflare Pages, Netlify, Vercel.
