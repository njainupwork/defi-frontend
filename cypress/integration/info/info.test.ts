describe('Info Page', () => {
  it('loads info overview', () => {
    cy.visit('/info')
    cy.get('#info-overview-title').should('be.visible')
  })

  it('loads info pools page', () => {
    cy.visit('/info/pools')
    cy.get('#info-pools-title').should('be.visible')
  })

  it('loads single pool page', () => {
    cy.visit('/info/pool/0x58f876857a02d6762e0101bb5c46a8c1ed44dc16')
    // Sometime no issue, sometime works, due to network issue.
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(45000)
    cy.get('#info-pool-pair-title').should('be.visible')
  })

  it('loads info tokens page', () => {
    cy.visit('/info/tokens')
    cy.get('#info-tokens-title').should('be.visible')
  })

  it('loads single token page', () => {
    cy.visit('/info/token/0xcde538bd8954ead01c56194f5c9905b310a5bd0e')
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(30000)
    cy.get('#info-token-name-title').should('be.visible')
  })
})
