describe("Opn Website Test Case", () => {
  it("Access to Opn website(Homepage)", () => {
    cy.visit(Cypress.config("opnWebsite"))
    cy.get('img[alt="OPN Logo"]').should("be.visible")
  })

  it("Access to Opn pro", () => {
    cy.visit(Cypress.config("opnPro"))
    cy.get('img[alt="OPN Logo"]').should("be.visible")
  })

  it("Access to Opn mint", () => {
    cy.visit(Cypress.config("opnMint"))
    cy.get('img[alt="OPN Logo"]').should("be.visible")
  })

  it("Access to Opn tag", () => {
    cy.visit(Cypress.config("opnTag"))
    cy.get('img[alt="OPN Logo"]').should("be.visible")
  })

  it("Access to Accept payment", () => {
    cy.visit(Cypress.config("acceptPayment"))
    cy.get('img[alt="OPN Logo"]').should("be.visible")
  })

  it("Access to Manage transactions", () => {
    cy.visit(Cypress.config("manageTransactions"))
    cy.get('img[alt="OPN Logo"]').should("be.visible")
  })

  it("Access to Send payouts", () => {
    cy.visit(Cypress.config("sendPayouts"))
    cy.get('img[alt="OPN Logo"]').should("be.visible")
  })

  it("Access to Manage-transaction/#protect-revenue ", () => {
    cy.visit(Cypress.config("protectRevenue"))
    cy.get('img[alt="OPN Logo"]').should("be.visible")
  })

  it("Access to Card issuing", () => {
    cy.visit(Cypress.config("cardIssuing"))
    cy.get('img[alt="OPN Logo"]').should("be.visible")
  })

  it("Access to Acquiring", () => {
    cy.visit(Cypress.config("productsAcquiring"))
    cy.get('img[alt="OPN Logo"]').should("be.visible")
  })

  it("Access to About us", () => {
    cy.visit(Cypress.config("aboutUs"))
    cy.get('img[alt="OPN Logo"]').should("be.visible")
  })

  it("Access to News", () => {
    cy.visit(Cypress.config("news"))
    cy.get('img[alt="OPN Logo"]').should("be.visible")
  })

  it("Access to Get started", () => {
    cy.visit(Cypress.config("getStarted"))
    cy.get('img[alt="OPN Logo"]').should("be.visible")
  })

  it("Access to Pricing", () => {
    cy.visit(Cypress.config("pricing"))
    cy.get('img[alt="OPN Logo"]').should("be.visible")
  })

  it("Access to Contact us", () => {
    cy.visit(Cypress.config("contactUs"))
    cy.get('img[alt="OPN Logo"]').should("be.visible")
  })

  it("Access to Contact sale", () => {
    cy.visit(Cypress.config("contactSale"))
    cy.get('img[alt="OPN Logo"]').should("be.visible")
  })

  it("Access to Contact support", () => {
    cy.visit(Cypress.config("contactSupport"))
    cy.get('img[alt="OPN Logo"]').should("be.visible")
  })

  it("Access to Contact partnership", () => {
    cy.visit(Cypress.config("contactPartnership"))
    cy.get('img[alt="OPN Logo"]').should("be.visible")
  })

  it("Access to Digital menu", () => {
    cy.visit(Cypress.config("digitalMenu"))
    cy.get('img[alt="OPN Logo"]').should("be.visible")
  })

  it("Access to Opn tag setup", () => {
    cy.visit(Cypress.config("opnTagSetup"))
    cy.get('img[alt="OPN Logo"]').should("be.visible")
  })

  it("Access to Opn stroe", () => {
    cy.visit(Cypress.config("opnStroe"))
    cy.get('img[alt="OPN Logo"]').should("be.visible")
  })

  it("Access to privacy", () => {
    cy.visit(Cypress.config("privacy"))
    cy.get('img[alt="OPN Logo"]').should("be.visible")
  })

  it("Access to Terms", () => {
    cy.visit(Cypress.config("terms"))
    cy.get('img[alt="OPN Logo"]').should("be.visible")
  })

  it("Access to OPN Pro Contact Sales Form", () => {
    cy.visit(Cypress.config("contactSales"))
    cy.get('img[alt="OPN Logo"]').should("be.visible")
  })

  it("Access to Customer Success Story Page", () => {
    cy.visit(Cypress.config("customerSuccessStory"))
    cy.get('img[alt="OPN Logo"]').should("be.visible")
  })

  it("Access to Customer Success Stories Main Page", () => {
    cy.visit(Cypress.config("customerSuccessStoriesMainPage"))
    cy.get('img[alt="OPN Logo"]').should("be.visible")
  })

  it("Access to Blog Archived Page", () => {
    cy.visit(Cypress.config("blogArchived"))
    cy.get('img[alt="OPN Logo"]').should("be.visible")
  })

  it("Access to  Blog-Post page", () => {
    cy.visit(Cypress.config("blogPost"))
    cy.get('img[alt="OPN Logo"]').should("be.visible")
  })

  it("Access to  Blog Main Page", () => {
    cy.visit(Cypress.config("blogMain"))
    cy.get('img[alt="OPN Logo"]').should("be.visible")
  })

  it("Access to PayFac Page", () => {
    cy.visit(Cypress.config("payFac"))
    cy.get('img[alt="OPN Logo"]').should("be.visible")
  })

  it("Access to Payment Links Page", () => {
    cy.visit(Cypress.config("paymentLinks"))
    cy.get('img[alt="OPN Logo"]').should("be.visible")
  })

  it("Access to New Privacy & Terms Page", () => {
    cy.visit(Cypress.config("newPrivacyAndTerms"))
    cy.get('img[alt="OPN Logo"]').should("be.visible")
  })

  it("Access to Wix page", () => {
    cy.visit(Cypress.config("wix"))
    cy.get('img[alt="OPN Logo"]').should("be.visible")
  })

  it("All buttons can be used and navigate to that page correctly", () => {
    //Contact us
    cy.visit(Cypress.config("opnWebsite"))
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
  })

  it("User can change language", () => {
    cy.visit(`${Cypress.config("opnWebsite")}th-th/`)
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

  it("User can change local", () => {
    cy.visit(`${Cypress.config("opnWebsite")}th-th/`)
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

  it("IP address of users should be detected and send them to the matching locale", () => {
    //only thai case
    cy.visit(Cypress.config("opnWebsite"))
    cy.url().should("eq", "https://opn-website.staging-internal.opn.dev/th-en/")
  })

  it("Remembers the language in which the website was last accessed", () => {
    cy.visit(Cypress.config("opnWebsite"))
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

  it("The details are correct according to the design", () => {
    cy.visit(`${Cypress.config("opnWebsite")}th-th/`)
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
})
