describe("Opn Website Test Case", () => {
  const opnWebsiteUrl = Cypress.config("opnWebsite")
  const opnProUrl = Cypress.config("opnPro")
  const opnMintUrl = Cypress.config("opnMint")
  const opnTagUrl = Cypress.config("opnTag")
  const acceptPaymentUrl = Cypress.config("acceptPayment")
  const manageTransactionsUrl = Cypress.config("manageTransactions")
  const sendPayoutsUrl = Cypress.config("sendPayouts")
  const protectRevenueUrl = Cypress.config("protectRevenue")
  const cardIssuingUrl = Cypress.config("cardIssuing")
  const productsAcquiringUrl = Cypress.config("productsAcquiring")
  const aboutUsUrl = Cypress.config("aboutUs")
  const newsUrl = Cypress.config("news")
  const getStartedUrl = Cypress.config("getStarted")
  const pricingUrl = Cypress.config("pricing")
  const contactUsUrl = Cypress.config("contactUs")
  const contactSaleUrl = Cypress.config("contactSale")
  const contactSupportUrl = Cypress.config("contactSupport")
  const contactPartnershipUrl = Cypress.config("contactPartnership")
  const digitalMenuUrl = Cypress.config("digitalMenu")

  it("Access to Opn website(Homepage)", () => {
    cy.visit(opnWebsiteUrl)
    cy.url().should("eq", opnWebsiteUrl)
  })

  it("Access to Opn pro", () => {
    cy.visit(opnProUrl)
    cy.url().should("eq", opnProUrl)
  })

  it("Access to Opn mint", () => {
    cy.visit(opnMintUrl)
    cy.url().should("eq", opnMintUrl)
  })

  it("Access to Opn tag", () => {
    cy.visit(opnTagUrl)
    cy.url().should("eq", opnTagUrl)
  })

  it("Access to Accept payment", () => {
    cy.visit(acceptPaymentUrl)
    cy.url().should("eq", acceptPaymentUrl)
  })

  it("Access to Manage transactions", () => {
    cy.visit(manageTransactionsUrl)
    cy.url().should("eq", manageTransactionsUrl)
  })

  it("Access to Send payouts", () => {
    cy.visit(sendPayoutsUrl)
    cy.url().should("eq", sendPayoutsUrl)
  })

  it("Access to Manage-transaction/#protect-revenue ", () => {
    cy.visit(protectRevenueUrl)
    cy.url().should("eq", protectRevenueUrl)
  })

  it("Access to Card issuing", () => {
    cy.visit(cardIssuingUrl)
    cy.url().should("eq", cardIssuingUrl)
  })

  it("Access to Acquiring", () => {
    cy.visit(productsAcquiringUrl)
    cy.url().should("eq", productsAcquiringUrl)
  })

  it("Access to About us", () => {
    cy.visit(aboutUsUrl)
    cy.url().should("eq", aboutUsUrl)
  })

  it("Access to News", () => {
    cy.visit(newsUrl)
    cy.url().should("eq", newsUrl)
  })

  it("Access to Get started", () => {
    cy.visit(getStartedUrl)
    cy.url().should("eq", getStartedUrl)
  })

  it("Access to Pricing", () => {
    cy.visit(pricingUrl)
    cy.url().should("eq", pricingUrl)
  })

  it("Access to Contact us", () => {
    cy.visit(contactUsUrl)
    cy.url().should("eq", contactUsUrl)
  })

  it("Access to Contact sale", () => {
    cy.visit(contactSaleUrl)
    cy.url().should("eq", contactSaleUrl)
  })

  it("Access to Contact support", () => {
    cy.visit(contactSupportUrl)
    cy.url().should("eq", contactSupportUrl)
  })

  it("Access to Contact partnership", () => {
    cy.visit(contactPartnershipUrl)
    cy.url().should("eq", contactPartnershipUrl)
  })

  it("Access to Digital menu", () => {
    cy.visit(digitalMenuUrl)
    cy.url().should("eq", digitalMenuUrl)
  })

  it("Access to Opn tag setup", () => {
    cy.visit(
      "https://opn-website.staging-internal.opn.dev/th-en/docs/opn-tag-setup//"
    )

    cy.visit(opnProUrl)
    cy.url().should("eq", opnProUrl)
  })

  it("Access to Opn stroe", () => {
    cy.visit(
      "https://opn-website.staging-internal.opn.dev/th-en/products/opn-store/"
    )

    cy.visit(opnProUrl)
    cy.url().should("eq", opnProUrl)
  })

  it("Access to privacy", () => {
    cy.visit("https://opn-website.staging-internal.opn.dev/th-en/privacy/")

    cy.visit(opnProUrl)
    cy.url().should("eq", opnProUrl)
  })

  it("Access to Terms", () => {
    cy.visit("https://opn-website.staging-internal.opn.dev/th-en/terms/")

    cy.visit(opnProUrl)
    cy.url().should("eq", opnProUrl)
  })

  it("Access to OPN Pro Contact Sales Form", () => {
    cy.visit(
      "https://opn-website.staging-internal.opn.dev/th-en/opn-pro/contact-us/sales/"
    )

    cy.visit(opnProUrl)
    cy.url().should("eq", opnProUrl)
  })

  it("Access to  Customer Success Story Page", () => {
    cy.visit(
      "https://opn-website.staging-internal.opn.dev/th-en/voice-of-customers/featured-customer-24hrs-city-florist/"
    )

    cy.visit(opnProUrl)
    cy.url().should("eq", opnProUrl)
  })

  it("Access to  Customer Success Stories Main Page", () => {
    cy.visit(
      "https://opn-website.staging-internal.opn.dev/th-en/voice-of-customers/"
    )

    cy.visit(opnProUrl)
    cy.url().should("eq", opnProUrl)
  })

  it("Access to  Blog Archived Page", () => {
    cy.visit(
      "https://opn-website.staging-internal.opn.dev/th-en/blog/archived/"
    )

    cy.visit(opnProUrl)
    cy.url().should("eq", opnProUrl)
  })

  it("Access to  Blog-Post page", () => {
    cy.visit(
      "https://opn-website.staging-internal.opn.dev/th-en/blog/payments/introducing-our-plugin-for-prestashop-as-a-new-way-to-connect-with-omise/"
    )

    cy.visit(opnProUrl)
    cy.url().should("eq", opnProUrl)
  })

  it("Access to  Blog Main Page", () => {
    cy.visit("https://opn-website.staging-internal.opn.dev/th-en/blog/")

    cy.visit(opnProUrl)
    cy.url().should("eq", opnProUrl)
  })

  it("Access to PayFac Page", () => {
    cy.visit(
      "https://opn-website.staging-internal.opn.dev/th-en/products/payfac/"
    )

    cy.visit(opnProUrl)
    cy.url().should("eq", opnProUrl)
  })

  it("Access to Payment Links Page", () => {
    cy.visit(
      "https://opn-website.staging-internal.opn.dev/th-en/products/payment-links/"
    )

    cy.visit(opnProUrl)
    cy.url().should("eq", opnProUrl)
  })

  it("Access to New Privacy & Terms Page", () => {
    cy.visit("https://opn-website.staging-internal.opn.dev/th-en/legal/")

    cy.visit(opnProUrl)
    cy.url().should("eq", opnProUrl)
  })

  it("Access to Wix page", () => {
    cy.visit("https://opn-website.staging-internal.opn.dev/th-en/wix/")

    cy.visit(opnProUrl)
    cy.url().should("eq", opnProUrl)
  })

  it.only("All buttons can be used and navigate to that page correctly", () => {
    //Contact us
    cy.visit("https://opn-website.staging-internal.opn.dev/th-en/")

    cy.visit(opnProUrl)

    cy.get("body")
      .find("div > div > div")
      .find("header")
      .find('div[class="MuiContainer-root css-vhc3a7"]')
      .find('div[class="MuiToolbar-root MuiToolbar-regular css-sg6pel"]')
      .find('div[class="MuiBox-root css-129v3h3"]')
      .find('div[class="MuiBox-root css-mc75fp"]')
      .find("a")
      .eq(0)
      .click()
    cy.url().should(
      "eq",
      "https://opn-website.staging-internal.opn.dev/th-en/contact-us/"
    )

    //Sign in
    cy.visit("https://opn-website.staging-internal.opn.dev/th-en/")
    cy.get(
      'a[class="MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButtonBase-root css-uli9ka"]'
    )
      .invoke("attr", "href")
      .should("eq", "https://dashboard.omise.co/signin")

    //Contact sales
    cy.get(
      'a[class="MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButtonBase-root css-ydr085"]'
    )
      .invoke("attr", "href")
      .should("eq", "/th-en/contact-us/sales")

    //See all feaures
    cy.get(
      'a[class="MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButtonBase-root css-onhynm"]'
    )
      .invoke("attr", "href")
      .should("eq", "/th-en/products/opn-payments/")

    // //See all feaures
    // cy.get(
    //   'a[class="MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButtonBase-root css-onhynm"]'
    // ).invoke("attr","href").should("eq","/th-en/contact-us/sales")

    // //See all feaures
    // cy.get(
    //   'a[class="MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButtonBase-root css-onhynm"]'
    // ).invoke("attr","href").should("eq","/th-en/contact-us/sales")

    // //See all feaures
    // cy.get(
    //   'a[class="MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButtonBase-root css-onhynm"]'
    // ).invoke("attr","href").should("eq","/th-en/contact-us/sales")
  })

  it.only("User can change language", () => {
    cy.visit("https://opn-website.staging-internal.opn.dev/th-th/")
    cy.get("body")
      .find(
        'button[class="MuiButton-root MuiButton-text MuiButton-textInherit MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorInherit MuiButtonBase-root  css-1lpsob3"]'
      )
      .eq(1)
      .click()
    cy.get('ul[class="MuiList-root MuiList-padding MuiMenu-list css-r8u8y9"]')
      .find('li[tabindex="0"]')
      .click({ force: true })
    cy.url().should("eq", "https://opn-website.staging-internal.opn.dev/th-en/")
  })

  it.only("User can change local", () => {
    cy.visit("https://opn-website.staging-internal.opn.dev/th-th/")
    cy.get("body")
      .find(
        'button[class="MuiButton-root MuiButton-text MuiButton-textInherit MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorInherit MuiButtonBase-root  css-1lpsob3"]'
      )
      .eq(0)
      .click()
    cy.get('ul[class="MuiList-root MuiList-padding MuiMenu-list css-r8u8y9"]')
      .find('li[tabindex="-1"]')
      .eq(0)
      .click({ force: true })
    cy.url().should("eq", "https://opn-website.staging-internal.opn.dev/jp-ja/")
  })

  it.only("IP address of users should be detected and send them to the matching locale", () => {
    //only thai case
    cy.visit("https://opn-website.staging-internal.opn.dev/")
    cy.url().should("eq", "https://opn-website.staging-internal.opn.dev/th-en/")
  })

  it.only("Remembers the language in which the website was last accessed", () => {
    cy.visit("https://opn-website.staging-internal.opn.dev/")
    cy.get("body")
      .find(
        'button[class="MuiButton-root MuiButton-text MuiButton-textInherit MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorInherit MuiButtonBase-root  css-1vzoao3"]'
      )
      .eq(0)
      .click()
    cy.get('ul[class="MuiList-root MuiList-padding MuiMenu-list css-r8u8y9"]')
      .find('li[tabindex="-1"]')
      .eq(0)
      .click({ force: true })

    cy.document().then((doc) => {
      const selectedLanguage = doc.documentElement.lang

      cy.setCookie("languageCookie", selectedLanguage.trim())
    })

    cy.window().then((win) => {
      win.close()
    })

    cy.getCookie("languageCookie").then((cookie) => {
      if (cookie) {
        cy.clearCookies()
        cy.request({
          url: "https://opn-website.staging-internal.opn.dev/",
          headers: {
            Cookie: `${cookie.name}=${cookie.value}`,
          },
        })
      } else {
        cy.visit("https://opn-website.staging-internal.opn.dev/")
      }
    })
    cy.url().should("eq", "https://opn-website.staging-internal.opn.dev/jp-ja/")
  })

  it.only("The details are correct according to the design", () => {
    cy.visit("https://opn-website.staging-internal.opn.dev/th-th/")
    cy.get('ul[class="main-menu MuiBox-root css-1nsln2s"]')
      .find("li")
      .eq(0)
      .trigger("mouseover")
    cy.get(
      'div[class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiMenu-paper MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation8 MuiPopover-paper css-18gvikn"]'
    ).should("be.visible")

    cy.get('ul[class="main-menu MuiBox-root css-1nsln2s"]')
      .find("li")
      .eq(1)
      .trigger("mouseover")
    cy.get(
      'div[class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiMenu-paper MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation8 MuiPopover-paper css-1krg7hx"]'
    ).should("be.visible")

    cy.get('ul[class="main-menu MuiBox-root css-1nsln2s"]')
      .find("li")
      .eq(2)
      .trigger("mouseover")
    cy.get(
      'div[class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiMenu-paper MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation8 MuiPopover-paper css-1krg7hx"]'
    ).should("be.visible")
  })

  //   it("Remembers the language in which the website was last accessed", () => {
  //     cy.visit("https://opn-website.staging-internal.opn.dev/th-th/")
  //   })

  //   it("Remembers the language in which the website was last accessed", () => {
  //     cy.visit("https://opn-website.staging-internal.opn.dev/th-th/")
  //   })
})
