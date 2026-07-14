/* ============================================================
   PhemightForms Marketing Site
   Shared header, footer, and interactive behavior.
   ============================================================ */
(function () {
  "use strict";

  /* Inline the icon sprite so icons render instantly everywhere. */
  var SPRITE_SVG =
    '<svg xmlns="http://www.w3.org/2000/svg" style="display:none">' +
    '<symbol id="i-cursor" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4l7 16 2.5-6.5L20 11z"/></symbol>' +
    '<symbol id="i-layers" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l9 5-9 5-9-5 9-5z"/><path d="M3 12l9 5 9-5"/><path d="M3 17l9 5 9-5"/></symbol>' +
    '<symbol id="i-device" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/></symbol>' +
    '<symbol id="i-branch" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="12" cy="18" r="2.5"/><path d="M6 8.5v2a4 4 0 004 4h0a4 4 0 004-4v-2"/><path d="M12 14.5V15.5"/></symbol>' +
    '<symbol id="i-card" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/><path d="M6 15h4"/></symbol>' +
    '<symbol id="i-invoice" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3h8l4 4v14H7z"/><path d="M15 3v4h4"/><path d="M10 12h6"/><path d="M10 16h6"/><path d="M10 8h2"/></symbol>' +
    '<symbol id="i-inbox" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14l2-9h12l2 9"/><path d="M4 14h4l1.5 2h5L16 14h4v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5z"/></symbol>' +
    '<symbol id="i-mail" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 7 9-7"/></symbol>' +
    '<symbol id="i-shield" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l8 3v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3z"/><path d="M9 12l2 2 4-4"/></symbol>' +
    '<symbol id="i-pen" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 013 3L8 18l-4 1 1-4 11.5-11.5z"/></symbol>' +
    '<symbol id="i-chart" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19V5"/><path d="M4 19h16"/><path d="M8 16v-5"/><path d="M12 16V8"/><path d="M16 16v-8"/></symbol>' +
    '<symbol id="i-lock" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/></symbol>' +
    '<symbol id="i-health" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-7-4.5-7-10a4 4 0 017-2.5A4 4 0 0119 11c0 5.5-7 10-7 10z"/></symbol>' +
    '<symbol id="i-edu" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M2 9l10-5 10 5-10 5L2 9z"/><path d="M6 11.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-4.5"/><path d="M22 9v6"/></symbol>' +
    '<symbol id="i-megaphone" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11v2a2 2 0 002 2h1l8 4V5L6 9H5a2 2 0 00-2 2z"/><path d="M16 8.5a4 4 0 010 7"/><path d="M7 15v3a2 2 0 002 2h1"/></symbol>' +
    '<symbol id="i-calendar" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18"/><path d="M8 3v4"/><path d="M16 3v4"/></symbol>' +
    '<symbol id="i-heart" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-7-4.4-7-10a4.2 4.2 0 017-3 4.2 4.2 0 017 3c0 5.6-7 10-7 10z"/></symbol>' +
    '<symbol id="i-cart" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M3 4h2l2.4 11.2a2 2 0 002 1.6h8.4a2 2 0 002-1.5L21 8H7"/></symbol>' +
    '<symbol id="i-headset" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M4 13v-2a8 8 0 0116 0v2"/><path d="M4 13a2 2 0 002 2h1v-5H6a2 2 0 00-2 2z"/><path d="M20 13a2 2 0 01-2 2h-1v-5h1a2 2 0 012 2z"/><path d="M15 19a3 3 0 01-3 3h-1"/></symbol>' +
    '<symbol id="i-quiz" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 014.2 1.8c0 1.5-2.2 2-2.2 3.2"/><path d="M12 17h.01"/></symbol>' +
    '<symbol id="i-download" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v11"/><path d="M7 11l5 5 5-5"/><path d="M5 20h14"/></symbol>' +
    '<symbol id="i-play" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M10 9l6 3-6 3V9z" fill="currentColor" stroke="none"/></symbol>' +
    '<symbol id="i-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13l4 4L19 7"/></symbol>' +
    '<symbol id="i-star" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.5l2.7 5.5 6 .9-4.4 4.2 1 6-5.3-2.8L6.7 19l1-6L3.3 8.9l6-.9L12 2.5z"/></symbol>' +
    '<symbol id="i-search" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></symbol>' +
    '<symbol id="i-copy" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="8" width="12" height="12" rx="2"/><path d="M4 16V6a2 2 0 012-2h10"/></symbol>' +
    '<symbol id="i-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M13 6l6 6-6 6"/></symbol>' +
    '<symbol id="i-chat" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M5 18l-1.5 3.5L8 19h9a4 4 0 004-4V8a4 4 0 00-4-4H7a4 4 0 00-4 4v6a4 4 0 002 3.5z"/></symbol>' +
    '<symbol id="i-bulb" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6"/><path d="M10 21h4"/><path d="M12 3a6 6 0 014 10.5V15H8v-1.5A6 6 0 0112 3z"/></symbol>' +
    '<symbol id="i-build" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 4.5l5 5"/><path d="M3 21l7.5-1.5L20 10a2.5 2.5 0 00-3.5-3.5L7 15.5 3 21z"/></symbol>' +
    '<symbol id="i-globe" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a14 14 0 010 18"/><path d="M12 3a14 14 0 000 18"/></symbol>' +
    '<symbol id="i-github" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 00-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.2-3.4-1.2-.4-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5a3.9 3.9 0 011-2.7 3.6 3.6 0 01.1-2.7s.8-.3 2.8 1a9.5 9.5 0 015 0c2-1.3 2.8-1 2.8-1a3.6 3.6 0 01.1 2.7 3.9 3.9 0 011 2.7c0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.8v2.6c0 .3.2.6.7.5A10 10 0 0012 2z"/></symbol>' +
    '<symbol id="i-gift" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="8" width="18" height="13" rx="1"/><path d="M12 8v13"/><path d="M3 12h18"/><path d="M12 8c-2-3-5-3.5-5-1.5S9.5 8 12 8z"/><path d="M12 8c2-3 5-3.5 5-1.5S14.5 8 12 8z"/></symbol>' +
    '<symbol id="i-spark" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v4"/><path d="M12 17v4"/><path d="M3 12h4"/><path d="M17 12h4"/><path d="M5.6 5.6l2.8 2.8"/><path d="M15.6 15.6l2.8 2.8"/><path d="M5.6 18.4l2.8-2.8"/><path d="M15.6 8.4l2.8-2.8"/></symbol>' +
    '<symbol id="i-upload" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 16V5"/><path d="M7 10l5-5 5 5"/><path d="M5 20h14"/></symbol>' +
    '<symbol id="i-plug" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M9 7V3"/><path d="M15 7V3"/><path d="M8 7h8v4a4 4 0 01-4 4h0a4 4 0 01-4-4V7z"/><path d="M12 15v6"/></symbol>' +
    '<symbol id="i-close" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M6 6l12 12"/><path d="M18 6L6 18"/></symbol>' +
    '<symbol id="i-top" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5"/><path d="M6 11l6-6 6 6"/></symbol>' +
    '<symbol id="i-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></symbol>' +
    "</svg>";

  var spriteHost = document.createElement("div");
  spriteHost.innerHTML = SPRITE_SVG;
  document.body.insertBefore(spriteHost.firstChild, document.body.firstChild);

  function icon(name, cls) {
    return '<svg class="icon ' + (cls || "") + '" aria-hidden="true"><use href="#' + name + '"></use></svg>';
  }

  /* Account portal is not live yet; route account actions to the contact page. */
  var LOGIN_URL = "contact.html";
  var REGISTER_URL = "contact.html";

  /* ---------- Shared header ---------- */
  var HEADER_HTML =
    '<div class="container">' +
    '<div class="header-row">' +
    '<a class="brand" href="index.html" aria-label="PhemightForms Home"><img class="logo-header" src="assets/img/logo-header.png" height="54" alt="PhemightForms"></a>' +

    '<nav class="main-nav" id="mainNav" aria-label="Main navigation">' +

    '<div class="nav-item"><a class="nav-link" data-nav="home" href="index.html">Home</a></div>' +

    /* Features dropdown */
    '<div class="nav-item" data-menu data-align="start">' +
    '<button class="nav-link" data-nav="features" aria-expanded="false">Features ' + icon("i-chev") + "</button>" +
    '<div class="menu-panel">' +
    '<div class="menu-group">' +
    '<div class="menu-heading">Build Forms</div>' +
    '<a href="features.html#builder">' + icon("i-build") + "Online Form Builder</a>" +
    '<a href="features.html#logic">' + icon("i-branch") + "Conditional Logic</a>" +
    '<a href="features.html#fields">' + icon("i-layers") + "Field Types</a>" +
    '<a href="features.html#uploads">' + icon("i-upload") + "File Uploads</a>" +
    '<a href="features.html#notifications">' + icon("i-mail") + "Form Notifications</a>" +
    '<a class="menu-footer-link" href="features.html">View all features ' + icon("i-arrow") + "</a>" +
    "</div>" +
    '<div class="menu-group">' +
    '<div class="menu-heading">Manage and Grow</div>' +
    '<a href="features.html#entries">' + icon("i-inbox") + "Entry Management</a>" +
    '<a href="features.html#reports">' + icon("i-chart") + "Reports and Analytics</a>" +
    '<a href="features.html#security">' + icon("i-shield") + "Spam Protection</a>" +
    '<a href="templates.html">' + icon("i-copy") + "Form Templates</a>" +
    "</div>" +
    '<div class="menu-promo">' +
    '<img src="assets/img/screenshots/builder.png" alt="PhemightForms builder preview">' +
    "<p>See how fast you can build a complete form with the visual builder.</p>" +
    '<a class="promo-link" href="features.html#builder">Explore the builder ' + icon("i-arrow") + "</a>" +
    "</div>" +
    "</div>" +
    "</div>" +

    '<div class="nav-item"><a class="nav-link" data-nav="templates" href="templates.html">Templates</a></div>' +
    '<div class="nav-item"><a class="nav-link" data-nav="pricing" href="pricing.html">Pricing</a></div>' +

    /* Pro / Plus features */
    '<div class="nav-item" data-menu data-align="start">' +
    '<button class="nav-link" data-nav="plus" aria-expanded="false">Pro ' + icon("i-chev") + "</button>" +
    '<div class="menu-panel">' +
    '<div class="menu-group">' +
    '<div class="menu-heading">Pro Features</div>' +
    '<a href="backup.html">' + icon("i-download") + "Website & Form Backup</a>" +
    '<a href="login-registration.html">' + icon("i-lock") + "Login & Registration</a>" +
    '<a href="features.html#payments">' + icon("i-card") + "Payments and Invoices</a>" +
    '<a href="integrations.html">' + icon("i-plug") + "Addons and Integrations</a>" +
    '<a href="pricing.html">' + icon("i-spark") + "Plans and Pricing</a>" +
    '<a class="menu-footer-link" href="' + REGISTER_URL + '">Create account ' + icon("i-arrow") + "</a>" +
    "</div>" +
    '<div class="menu-group">' +
    '<div class="menu-heading">How it works</div>' +
    '<a href="backup.html">Export forms and entries</a>' +
    '<a href="login-registration.html">Login and signup shortcodes</a>' +
    '<a href="features.html#payments">Payment forms and links</a>' +
    '<a href="integrations.html#payments">Payment addons</a>' +
    '<a href="docs.html">Documentation</a>' +
    "</div>" +
    "</div>" +
    "</div>" +

    /* Integrations dropdown */
    '<div class="nav-item" data-menu data-align="start">' +
    '<button class="nav-link" data-nav="integrations" aria-expanded="false">Integrations ' + icon("i-chev") + "</button>" +
    '<div class="menu-panel">' +
    '<div class="menu-group">' +
    '<div class="menu-heading">By Category</div>' +
    '<a href="integrations.html#marketing">' + icon("i-megaphone") + "Email Marketing</a>" +
    '<a href="integrations.html#payments">' + icon("i-card") + "Payments</a>" +
    '<a href="integrations.html#crm">' + icon("i-globe") + "CRM and Sales</a>" +
    '<a href="integrations.html#automation">' + icon("i-plug") + "Automation</a>" +
    '<a href="integrations.html#storage">' + icon("i-layers") + "Storage and Sheets</a>" +
    '<a class="menu-footer-link" href="integrations.html">View all integrations ' + icon("i-arrow") + "</a>" +
    "</div>" +
    '<div class="menu-group">' +
    '<div class="menu-heading">Popular</div>' +
    '<a href="integrations.html#payments"><img src="assets/img/addons/stripe-pro.svg" alt="" width="18" height="18">Stripe</a>' +
    '<a href="integrations.html#payments"><img src="assets/img/addons/paypal-commerce.svg" alt="" width="18" height="18">PayPal</a>' +
    '<a href="integrations.html#marketing"><img src="assets/img/addons/mailchimp.svg" alt="" width="18" height="18">Mailchimp</a>' +
    '<a href="integrations.html#storage"><img src="assets/img/addons/google-sheets.svg" alt="" width="18" height="18">Google Sheets</a>' +
    '<a href="integrations.html#automation"><img src="assets/img/addons/zapier.svg" alt="" width="18" height="18">Zapier</a>' +
    '<a href="integrations.html#automation"><img src="assets/img/addons/slack.svg" alt="" width="18" height="18">Slack</a>' +
    "</div>" +
    "</div>" +
    "</div>" +

    '<div class="nav-item"><a class="nav-link" data-nav="testimonials" href="testimonials.html">Testimonials</a></div>' +

    /* Resources dropdown */
    '<div class="nav-item" data-menu data-align="end">' +
    '<button class="nav-link" data-nav="resources" aria-expanded="false">Resources ' + icon("i-chev") + "</button>" +
    '<div class="menu-panel">' +
    '<div class="menu-group">' +
    '<div class="menu-heading">Learn</div>' +
    '<a href="docs.html">' + icon("i-bulb") + "Documentation</a>" +
    '<a href="docs.html#start">' + icon("i-play") + "Getting Started</a>" +
    '<a href="blog.html">' + icon("i-pen") + "Blog</a>" +
    '<a href="docs.html#faq">' + icon("i-chat") + "FAQ</a>" +
    "</div>" +
    '<div class="menu-group">' +
    '<div class="menu-heading">Company</div>' +
    '<a href="about.html">' + icon("i-heart") + "About Us</a>" +
    '<a href="careers.html">' + icon("i-spark") + "Careers</a>" +
    '<a href="contact.html">' + icon("i-headset") + "Contact</a>" +
    '<a href="download.html">' + icon("i-download") + "Download</a>" +
    "</div>" +
    "</div>" +
    "</div>" +

    "</nav>" +

    '<div class="header-actions">' +
    '<a class="login-link" href="' + LOGIN_URL + '">Login</a>' +
    '<a class="btn btn-gold header-cta" href="download.html">Get PhemightForms</a>' +
    '<button class="nav-toggle" id="navToggle" aria-label="Toggle menu" aria-expanded="false"><span></span><span></span><span></span></button>' +
    "</div>" +
    "</div>" +
    "</div>";

  /* ---------- Shared footer ---------- */
  var FOOTER_HTML =
    '<div class="container">' +
    '<div class="footer-mega">' +
    '<div class="footer-brand">' +
    '<a class="brand" href="index.html" aria-label="PhemightForms Home"><img src="assets/img/logo.png" width="64" height="64" alt="PhemightForms"></a>' +
    "<p>PhemightForms (Phemight Forms) is the friendly WordPress form builder. Create beautiful forms, collect entries, accept payments, and grow with confidence.</p>" +
    "</div>" +
    '<div class="footer-col"><h4>Company</h4>' +
    '<a href="careers.html">Careers</a>' +
    '<a href="testimonials.html">Testimonials</a>' +
    '<a href="contact.html">Contact</a>' +
    '<a href="press.html">Press</a>' +
    '<a href="affiliates.html">Affiliates</a>' +
    '<a href="blog.html">Blog</a>' +
    '<a href="ftc-disclosure.html">FTC Disclosure</a>' +
    "</div>" +
    '<div class="footer-col"><h4>Top Features</h4>' +
    '<a href="features.html#builder">Online Form Builder</a>' +
    '<a href="features.html#logic">Conditional Logic</a>' +
    '<a href="features.html#entries">Entry Management</a>' +
    '<a href="features.html#notifications">Form Notifications</a>' +
    '<a href="features.html#uploads">File Uploads</a>' +
    '<a href="features.html#reports">Reports and Analytics</a>' +
    '<a href="features.html#security">Spam Protection</a>' +
    '<a href="templates.html#quizzes">Quizzes</a>' +
    '<a href="templates.html#registration">User Registration</a>' +
    '<a href="templates.html#feedback">Surveys and Polls</a>' +
    "</div>" +
    '<div class="footer-col"><h4>Pro Features</h4>' +
    '<a href="backup.html">Website & Form Backup</a>' +
    '<a href="login-registration.html">Login & Registration</a>' +
    '<a href="features.html#payments">Payments and Invoices</a>' +
    '<a href="features.html#payments">Payment Links</a>' +
    '<a href="integrations.html">Addons</a>' +
    '<a href="integrations.html#payments">Stripe, PayPal, Square</a>' +
    '<a href="pricing.html">Plans and Pricing</a>' +
    "</div>" +
    '<div class="footer-col"><h4>Integrations</h4>' +
    '<a href="integrations.html#marketing">Mailchimp</a>' +
    '<a href="integrations.html#storage">Google Sheets</a>' +
    '<a href="integrations.html#crm">Salesforce</a>' +
    '<a href="integrations.html#crm">HubSpot</a>' +
    '<a href="integrations.html#storage">Google Drive</a>' +
    '<a href="integrations.html#automation">Slack</a>' +
    '<a href="integrations.html#marketing">Brevo</a>' +
    "</div>" +
    '<div class="footer-col"><h4>Helpful Links</h4>' +
    '<a href="contact.html">Support</a>' +
    '<a href="docs.html">Documentation</a>' +
    '<a href="pricing.html">Plans and Pricing</a>' +
    '<a href="download.html">Download</a>' +
    '<a href="templates.html#nonprofit">Forms for Nonprofits</a>' +
    '<a href="about.html">About PhemightForms</a>' +
    '<a href="blog.html">Guides and Tips</a>' +
    "</div>" +
    "</div>" +
    '<div class="footer-bottom">' +
    "<span>Copyright " + new Date().getFullYear() + " PhemightForms. All rights reserved.</span>" +
    '<div class="footer-social">' +
    '<a href="#" aria-label="GitHub">' + icon("i-github") + "</a>" +
    '<a href="#" aria-label="Website">' + icon("i-globe") + "</a>" +
    '<a href="contact.html" aria-label="Email">' + icon("i-mail") + "</a>" +
    "</div>" +
    "</div>" +
    "</div>";

  /* ---------- Render shared chrome ---------- */
  var headerHost = document.getElementById("app-header");
  var footerHost = document.getElementById("app-footer");
  if (headerHost) headerHost.innerHTML = HEADER_HTML;
  if (footerHost) footerHost.innerHTML = FOOTER_HTML;

  var page = document.body.getAttribute("data-page") || "";
  var activeLink = document.querySelector('[data-nav="' + page + '"]');
  if (activeLink) activeLink.classList.add("active");

  /* ---------- Back to top button ---------- */
  var toTop = document.createElement("button");
  toTop.className = "to-top";
  toTop.setAttribute("aria-label", "Back to top");
  toTop.innerHTML = icon("i-top");
  document.body.appendChild(toTop);
  toTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* ---------- Header scroll state ---------- */
  var header = document.querySelector(".site-header");
  function onScroll() {
    if (header) header.classList.toggle("scrolled", window.scrollY > 8);
    toTop.classList.toggle("show", window.scrollY > 600);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile nav toggle ---------- */
  var navToggle = document.getElementById("navToggle");
  var mainNav = document.getElementById("mainNav");
  function closeMobileNav() {
    if (!mainNav || !navToggle) return;
    mainNav.classList.remove("open");
    navToggle.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("nav-open");
    document.body.style.overflow = "";
  }
  if (navToggle && mainNav) {
    navToggle.addEventListener("click", function () {
      var open = mainNav.classList.toggle("open");
      navToggle.classList.toggle("open", open);
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.classList.toggle("nav-open", open);
      document.body.style.overflow = open ? "hidden" : "";
    });
    mainNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        if (window.matchMedia("(max-width: 980px)").matches) closeMobileNav();
      });
    });
    window.addEventListener("resize", function () {
      if (!window.matchMedia("(max-width: 980px)").matches) closeMobileNav();
    });
  }

  /* ---------- Dropdown menus ---------- */
  var items = Array.prototype.slice.call(document.querySelectorAll(".nav-item[data-menu]"));
  var isDesktop = function () { return window.matchMedia("(min-width: 981px)").matches; };
  var leaveTimers = new WeakMap();

  function closeAll(except) {
    items.forEach(function (it) {
      if (it !== except) {
        it.classList.remove("open");
        var b = it.querySelector(".nav-link");
        if (b) b.setAttribute("aria-expanded", "false");
      }
    });
  }

  function openItem(item) {
    var btn = item.querySelector(".nav-link");
    closeAll(item);
    item.classList.add("open");
    if (btn) btn.setAttribute("aria-expanded", "true");
  }

  function closeItem(item) {
    var btn = item.querySelector(".nav-link");
    item.classList.remove("open");
    if (btn) btn.setAttribute("aria-expanded", "false");
  }

  items.forEach(function (item) {
    var btn = item.querySelector(".nav-link");
    if (!btn) return;

    btn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      if (item.classList.contains("open")) {
        closeItem(item);
      } else {
        openItem(item);
      }
    });

    item.addEventListener("mouseenter", function () {
      if (!isDesktop()) return;
      var t = leaveTimers.get(item);
      if (t) {
        clearTimeout(t);
        leaveTimers.delete(item);
      }
      openItem(item);
    });

    item.addEventListener("mouseleave", function (e) {
      if (!isDesktop()) return;
      if (e.relatedTarget && item.contains(e.relatedTarget)) return;
      var t = setTimeout(function () {
        if (!item.matches(":hover")) closeItem(item);
      }, 180);
      leaveTimers.set(item, t);
    });
  });

  document.addEventListener("click", function (e) {
    if (e.target.closest && e.target.closest(".nav-item[data-menu]")) return;
    closeAll(null);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeAll(null);
  });

  /* ---------- Showcase tabs ---------- */
  var tabButtons = Array.prototype.slice.call(document.querySelectorAll("[data-tab]"));
  var tabPanes = Array.prototype.slice.call(document.querySelectorAll("[data-pane]"));
  tabButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var key = btn.getAttribute("data-tab");
      tabButtons.forEach(function (b) { b.classList.toggle("active", b === btn); });
      tabPanes.forEach(function (p) { p.classList.toggle("active", p.getAttribute("data-pane") === key); });
    });
  });

  /* ---------- FAQ accordion ---------- */
  Array.prototype.slice.call(document.querySelectorAll(".faq-item")).forEach(function (item) {
    var q = item.querySelector(".faq-q");
    var a = item.querySelector(".faq-a");
    if (!q || !a) return;
    q.addEventListener("click", function () {
      var open = item.classList.toggle("open");
      a.style.maxHeight = open ? a.scrollHeight + "px" : "0px";
    });
  });

  /* ---------- Reveal on scroll ---------- */
  var revealEls = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("shown");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("shown"); });
  }

  /* ---------- Animated trust counters ---------- */
  function animateCount(el) {
    var target = parseInt(el.getAttribute("data-count"), 10);
    if (isNaN(target)) return;
    var suffix = el.getAttribute("data-suffix") || "";
    el.textContent = "0" + suffix;
    var duration = 1200;
    var start = performance.now();
    function frame(now) {
      var t = Math.min(1, (now - start) / duration);
      var eased = 1 - Math.pow(1 - t, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (t < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }
  var counters = Array.prototype.slice.call(document.querySelectorAll("[data-count]"));
  if (counters.length && "IntersectionObserver" in window) {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          cio.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    counters.forEach(function (el) { cio.observe(el); });
  } else {
    counters.forEach(animateCount);
  }

  /* ---------- Hero parallax tilt ---------- */
  var tilt = document.querySelector("[data-tilt]");
  if (tilt && window.matchMedia("(pointer:fine)").matches) {
    var framePending = false;
    var lastX = 0;
    var lastY = 0;
    tilt.addEventListener("mousemove", function (e) {
      var rect = tilt.getBoundingClientRect();
      lastX = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
      lastY = ((e.clientY - rect.top) / rect.height - 0.5) * -10;
      if (framePending) return;
      framePending = true;
      requestAnimationFrame(function () {
        tilt.style.transform = "rotateY(" + lastX + "deg) rotateX(" + lastY + "deg)";
        framePending = false;
      });
    });
    tilt.addEventListener("mouseleave", function () {
      tilt.style.transition = "transform .5s cubic-bezier(.22,1,.36,1)";
      tilt.style.transform = "rotateY(0) rotateX(0)";
      setTimeout(function () { tilt.style.transition = ""; }, 520);
    });
  }

  /* ---------- Magnetic gold buttons ---------- */
  Array.prototype.slice.call(document.querySelectorAll(".btn-magnetic")).forEach(function (btn) {
    if (!window.matchMedia("(pointer:fine)").matches) return;
    btn.addEventListener("mousemove", function (e) {
      var rect = btn.getBoundingClientRect();
      var x = e.clientX - rect.left - rect.width / 2;
      var y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = "translate(" + (x * 0.18) + "px," + (y * 0.22) + "px) translateY(-3px) scale(1.02)";
    });
    btn.addEventListener("mouseleave", function () {
      btn.style.transform = "";
    });
  });

  /* ---------- Feature card spotlight follow ---------- */
  Array.prototype.slice.call(document.querySelectorAll(".feature-card")).forEach(function (card) {
    card.addEventListener("mousemove", function (e) {
      var rect = card.getBoundingClientRect();
      card.style.setProperty("--mx", ((e.clientX - rect.left) / rect.width) * 100 + "%");
      card.style.setProperty("--my", ((e.clientY - rect.top) / rect.height) * 100 + "%");
    });
  });
})();
