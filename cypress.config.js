const { defineConfig } = require("cypress")

module.exports = defineConfig({
  e2e: {
    opnWebsite: "https://opn-website.staging-internal.opn.dev/th-en/",
    opnPro: "https://opn-website.staging-internal.opn.dev/th-en/opn-pro/",
    opnMint:
      "https://opn-website.staging-internal.opn.dev/th-en/products/opn-mint/",
    opnTag:
      "https://opn-website.staging-internal.opn.dev/th-en/products/opn-tag/",
    acceptPayment:
      "https://opn-website.staging-internal.opn.dev/th-en/products/accept-payment/",
    manageTransactions:
      "https://opn-website.staging-internal.opn.dev/th-en/products/manage-transaction/",
    sendPayouts:
      "https://opn-website.staging-internal.opn.dev/th-en/products/send-payouts/",
    protectRevenue:
      "https://opn-website.staging-internal.opn.dev/th-en/products/manage-transaction/#protect-revenue/",
    cardIssuing:
      "https://opn-website.staging-internal.opn.dev/th-en/products/card-issuing/",
    productsAcquiring:
      "https://opn-website.staging-internal.opn.dev/th-en/products/acquiring/",
    aboutUs: "https://opn-website.staging-internal.opn.dev/th-en/about-us/",
    news: "https://opn-website.staging-internal.opn.dev/th-en/news/",
    getStarted:
      "https://opn-website.staging-internal.opn.dev/th-en/get-started/",
    pricing: "https://opn-website.staging-internal.opn.dev/th-en/pricing/",
    contactUs: "https://opn-website.staging-internal.opn.dev/th-en/contact-us/",
    contactSale:
      "https://opn-website.staging-internal.opn.dev/th-en/contact-us/sales/",
    contactSupport:
      "https://opn-website.staging-internal.opn.dev/th-en/contact-us/support/",
    contactPartnership:
      "https://opn-website.staging-internal.opn.dev/th-en/contact-us/partnership/",
    digitalMenu:
      "https://opn-website.staging-internal.opn.dev/th-en/products/digital-menu/",
  },
})
