describe('Profile Page', () => {
  it('loads profile setup page', () => {
    cy.visit('/profile')
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(30000)
    cy.get('#profile-setup-title').should('be.visible')
  })
})
