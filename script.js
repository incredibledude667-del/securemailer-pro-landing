const translations = {
  ru: {
    navPrivacy: "Приватность",
    navWorkflow: "Процесс",
    navReports: "Отчеты",
    navPrice: "Цена",
    navBuy: "Купить",
    heroEyebrow: "Локальная программа для B2B-рассылки",
    heroTitle: "Рассылка без раскрытия базы.",
    heroText:
      "SecureMailer Pro отправляет каждому получателю отдельное письмо через ваши SMTP/IMAP-аккаунты. База остается на компьютере, без CC/BCC и без загрузки контактов в облако.",
    ctaPrimary: "Купить / обсудить",
    ctaSecondary: "Как работает",
    signalOne: "В поле To всегда один адрес",
    signalTwo: "Отправка через ваши ящики",
    signalThree: "Отчет и чистая база после кампании",
    privacyEyebrow: "Главная идея",
    privacyTitle: "Контакты остаются у вас.",
    privacyText:
      "Это не SaaS и не браузерная автоматизация. Программа работает локально как почтовый клиент: берет вашу базу, отправляет письма через ваши аккаунты и сохраняет отчеты на вашем компьютере.",
    privacyPointOne: "Без загрузки базы на сервер",
    privacyPointTwo: "Без групповых писем, CC и BCC",
    privacyPointThree: "Пароли хранятся в системном keychain",
    workflowEyebrow: "Рабочий процесс",
    workflowTitle: "От базы до отчета без ручной рутины.",
    stepOneTitle: "Подготовьте письмо",
    stepOneText: "Напишите текст вручную или импортируйте DOCX, TXT или HTML. Добавьте вложения отдельно.",
    stepTwoTitle: "Загрузите базу",
    stepTwoText: "XLSX, CSV, TXT и DOCX объединяются в единую базу с персонализацией по полям.",
    stepThreeTitle: "Проверьте качество",
    stepThreeText: "Дубли, неверные email, домены без MX, стоп-лист и подозрительные адреса видны до запуска.",
    stepFourTitle: "Запустите кампанию",
    stepFourText: "Программа учитывает лимиты аккаунтов, делает паузы и продолжает после cooldown.",
    reportsEyebrow: "Контроль результата",
    reportsTitle: "Понятно, кому ушло, а где ошибка.",
    reportsText:
      "После кампании остаются статусы получателей, причины ошибок, проверка возвратов через IMAP и отдельная чистая база для следующей отправки.",
    priceEyebrow: "Одна цена",
    priceTitle: "Разовая покупка без подписки.",
    priceText:
      "Подходит отделам продаж, B2B-компаниям и владельцам клиентских баз, которым нужна контролируемая рассылка без облачных платформ.",
    licenseLabel: "SecureMailer Pro",
    licenseText: "Локальная лицензия продукта. Детали покупки и передачи обсуждаются в Telegram.",
    priceButton: "Купить / обсудить",
    contactEyebrow: "SecureMailer Pro",
    contactTitle: "Начните с первой безопасной кампании.",
    contactText: "Напишите в Telegram, чтобы обсудить покупку, установку и сценарий первой рассылки.",
    contactButton: "Купить / обсудить",
    developerButton: "Разработчик",
    footerNote: "Private. Local. Professional.",
  },
  en: {
    navPrivacy: "Privacy",
    navWorkflow: "Workflow",
    navReports: "Reports",
    navPrice: "Price",
    navBuy: "Buy",
    heroEyebrow: "Local desktop software for B2B outreach",
    heroTitle: "Private outreach. No exposed lists.",
    heroText:
      "SecureMailer Pro sends one individual email per recipient through your own SMTP/IMAP accounts. Your database stays on your computer, with no CC/BCC and no cloud contact upload.",
    ctaPrimary: "Buy / discuss",
    ctaSecondary: "See workflow",
    signalOne: "Exactly one address in To",
    signalTwo: "Sent from your mailboxes",
    signalThree: "Report and clean list after each campaign",
    privacyEyebrow: "Core principle",
    privacyTitle: "Contacts stay with you.",
    privacyText:
      "This is not a SaaS platform and not browser automation. The app works locally like an email client: it reads your list, sends through your accounts, and saves reports on your computer.",
    privacyPointOne: "No database upload to a server",
    privacyPointTwo: "No group emails, CC or BCC",
    privacyPointThree: "Passwords stay in the system keychain",
    workflowEyebrow: "Campaign workflow",
    workflowTitle: "From list to report without manual routine.",
    stepOneTitle: "Prepare the message",
    stepOneText: "Write manually or import DOCX, TXT or HTML. Add attachments separately.",
    stepTwoTitle: "Load the list",
    stepTwoText: "XLSX, CSV, TXT and DOCX are merged into one personalized recipient base.",
    stepThreeTitle: "Check quality",
    stepThreeText: "Duplicates, invalid emails, domains without MX, stop-list matches and suspicious addresses are visible before launch.",
    stepFourTitle: "Launch campaign",
    stepFourText: "The app follows account limits, waits between messages, and resumes after cooldown.",
    reportsEyebrow: "Result control",
    reportsTitle: "Know who received it and where it failed.",
    reportsText:
      "Each campaign leaves recipient statuses, error reasons, bounce checks through IMAP and a separate clean list for the next send.",
    priceEyebrow: "One price",
    priceTitle: "One-time purchase. No subscription.",
    priceText:
      "Built for sales teams, B2B companies and database owners who need controlled outreach without cloud platforms.",
    licenseLabel: "SecureMailer Pro",
    licenseText: "Local product license. Purchase and delivery details are discussed in Telegram.",
    priceButton: "Buy / discuss",
    contactEyebrow: "SecureMailer Pro",
    contactTitle: "Start your first safe campaign.",
    contactText: "Message us on Telegram to discuss purchase, setup and your first outreach workflow.",
    contactButton: "Buy / discuss",
    developerButton: "Developer",
    footerNote: "Private. Local. Professional.",
  },
};

const config = window.SECUREMAILER_SITE || {};
const langButtons = document.querySelectorAll("[data-lang-select]");
const priceNodes = document.querySelectorAll("[data-price]");
const contactLinks = document.querySelectorAll("[data-contact]");
let currentLang = localStorage.getItem("securemailer_lang") || "ru";

function applyLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  localStorage.setItem("securemailer_lang", lang);

  langButtons.forEach((button) => {
    const isActive = button.dataset.langSelect === lang;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = translations[lang][key] || translations.ru[key] || node.textContent;
  });
}

function applyConfig() {
  const price = config.price || "$150";
  priceNodes.forEach((node) => {
    node.textContent = price;
  });

  const buyUrl = config.contactUrl || "";
  const developerUrl = config.developerUrl || buyUrl;

  contactLinks.forEach((link) => {
    const contactType = link.dataset.contact;
    const targetUrl = contactType === "developer" ? developerUrl : buyUrl;

    if (targetUrl) {
      link.href = targetUrl;
      return;
    }

    if (config.contactEmail && contactType !== "developer") {
      link.href = `mailto:${config.contactEmail}?subject=SecureMailer%20Pro`;
      return;
    }

    link.href = "#contact";
  });
}

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.langSelect);
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 },
);

document.querySelectorAll("[data-reveal]").forEach((node, index) => {
  node.style.transitionDelay = `${Math.min(index * 35, 210)}ms`;
  observer.observe(node);
});

applyLanguage(currentLang);
applyConfig();

if ("scrollRestoration" in window.history && !window.location.hash) {
  window.history.scrollRestoration = "manual";
  window.scrollTo({ top: 0, left: 0 });
}
