describe('template spec', () => {
  it(' "Access to Opn website(Homepage)', () => {
    cy.visit('https://opn-website.staging-internal.opn.dev/th-en/')
  })
  it('Access to Opn pro ', () => {
    cy.visit('https://opn-website.staging-internal.opn.dev/th-en/opn-pro/')
  })
})