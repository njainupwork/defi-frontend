describe('Farms Page', () => {
  beforeEach(() => cy.visit('/farms'))

  it('loads live farms', () => {
    cy.get('#farms-table').should('be.visible')
  })

  /* comment: no have data Nov.2.2021
  it('loads finished farms', () => {
    cy.get('#finished-farms-button').click()
    cy.get('#staked-only-farms').click()
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(20000)
    // commented this test cases because there are not inactive farms data resulting
    // #farms-table to be invisible
    cy.get('#farms-table').should('be.visible')
  })
  */

})
