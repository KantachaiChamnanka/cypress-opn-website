describe("Opn Website Test Case", () => {
    it("Access to Opn website(Homepage)", () => {
      cy.visit("https://opn-website.staging-internal.opn.dev/th-en/")
    })
  
    it("Access to Opn pro", () => {
      cy.visit("https://opn-website.staging-internal.opn.dev/th-en/opn-pro/")
    })
  
    it("Access to Opn mint", () => {
      cy.visit(
        "https://opn-website.staging-internal.opn.dev/th-en/products/opn-mint/"
      )
    })
  
    it("Access to Opn tag", () => {
      cy.visit(
        "https://opn-website.staging-internal.opn.dev/th-en/products/opn-tag/"
      )
    })
  
    it("Access to Accept payment", () => {
      cy.visit(
        "https://opn-website.staging-internal.opn.dev/th-en/products/accept-payment/"
      )
    })
  
    it("Access to Manage transactions", () => {
      cy.visit(
        "https://opn-website.staging-internal.opn.dev/th-en/products/manage-transaction/"
      )
    })
  
    it("Access to Send payouts ", () => {
      cy.visit(
        "https://opn-website.staging-internal.opn.dev/th-en/products/send-payouts/"
      )
    })
  
    it("Access to Manage-transaction/#protect-revenue ", () => {
      cy.visit(
        "https://opn-website.staging-internal.opn.dev/th-en/products/manage-transaction/#protect-revenue"
      )
    })
  
    it("Access to Card issuing ", () => {
      cy.visit(
        "https://opn-website.staging-internal.opn.dev/th-en/products/card-issuing/"
      )
    })
  
    it("Access to Acquiring", () => {
      cy.visit(
        "https://opn-website.staging-internal.opn.dev/th-en/products/acquiring/"
      )
    })
  
    it("Access to About us", () => {
      cy.visit("https://opn-website.staging-internal.opn.dev/th-en/about-us/")
    })
  
    it("Access to News", () => {
      cy.visit("https://opn-website.staging-internal.opn.dev/th-en/news/")
    })
  
    it("Access to Get started", () => {
      cy.visit("https://opn-website.staging-internal.opn.dev/th-en/get-started/")
    })
  
    it("Access to Pricing", () => {
      cy.visit("https://opn-website.staging-internal.opn.dev/th-en/pricing/")
    })
  
    it("Access to Contact us", () => {
      cy.visit("https://opn-website.staging-internal.opn.dev/th-en/contact-us/")
    })
  
    it("Access to Contact sale", () => {
      cy.visit(
        "https://opn-website.staging-internal.opn.dev/th-en/contact-us/sales/"
      )
    })
  
    it("Access to Contact support", () => {
      cy.visit(
        "https://opn-website.staging-internal.opn.dev/th-en/contact-us/support/"
      )
    })
  
    it("Access to Contact partnership", () => {
      cy.visit(
        "https://opn-website.staging-internal.opn.dev/th-en/contact-us/partnership/"
      )
    })
  
    it("Access to Digital menu", () => {
      cy.visit(
        "https://opn-website.staging-internal.opn.dev/th-en/products/digital-menu/"
      )
    })
  
    it("Access to Opn tag setup", () => {
      cy.visit(
        "https://opn-website.staging-internal.opn.dev/th-en/docs/opn-tag-setup//"
      )
    })
  
    it("Access to Opn stroe", () => {
      cy.visit(
        "https://opn-website.staging-internal.opn.dev/th-en/products/opn-store/"
      )
    })
  
    it("Access to privacy", () => {
      cy.visit("https://opn-website.staging-internal.opn.dev/th-en/privacy/")
    })
  
    it("Access to Terms", () => {
      cy.visit("https://opn-website.staging-internal.opn.dev/th-en/terms/")
    })
  
    it("Access to OPN Pro Contact Sales Form", () => {
      cy.visit(
        "https://opn-website.staging-internal.opn.dev/th-en/opn-pro/contact-us/sales/"
      )
    })
  
    it("Access to  Customer Success Story Page", () => {
      cy.visit(
        "https://opn-website.staging-internal.opn.dev/th-en/voice-of-customers/featured-customer-24hrs-city-florist/"
      )
    })
  
    it("Access to  Customer Success Stories Main Page", () => {
      cy.visit(
        "https://opn-website.staging-internal.opn.dev/th-en/voice-of-customers/"
      )
    })
  
    it("Access to  Blog Archived Page", () => {
      cy.visit(
        "https://opn-website.staging-internal.opn.dev/th-en/blog/archived/"
      )
    })
  
    it("Access to  Blog-Post page", () => {
      cy.visit(
        "https://opn-website.staging-internal.opn.dev/th-en/blog/payments/introducing-our-plugin-for-prestashop-as-a-new-way-to-connect-with-omise/"
      )
    })
  
    it("Access to  Blog Main Page", () => {
      cy.visit("https://opn-website.staging-internal.opn.dev/th-en/blog/")
    })
  
    it("Access to PayFac Page", () => {
      cy.visit(
        "https://opn-website.staging-internal.opn.dev/th-en/products/payfac/"
      )
    })
  
    it("Access to Payment Links Page", () => {
      cy.visit(
        "https://opn-website.staging-internal.opn.dev/th-en/products/payment-links/"
      )
    })
  
    it("Access to New Privacy & Terms Page", () => {
      cy.visit("https://opn-website.staging-internal.opn.dev/th-en/legal/")
    })
  
    it("Access to Wix page", () => {
      cy.visit("https://opn-website.staging-internal.opn.dev/th-en/wix/")
    })
  
    it("All buttons can be used and navigate to that page correctly", () => {
      //Contact us
      cy.visit("https://opn-website.staging-internal.opn.dev/th-en/")
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
      ).invoke("attr","href").should("eq","https://dashboard.omise.co/signin")
      
      //Contact sales
      cy.get(
        'a[class="MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButtonBase-root css-ydr085"]'
      ).invoke("attr","href").should("eq","/th-en/contact-us/sales")
  
      //See all feaures
      cy.get(
        'a[class="MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButtonBase-root css-onhynm"]'
      ).invoke("attr","href").should("eq","/th-en/products/opn-payments/")
  
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
      cy.visit("https://opn-website.staging-internal.opn.dev/th-en/blog/")
    })
  
  })
  