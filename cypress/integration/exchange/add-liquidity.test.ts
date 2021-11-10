describe('Add Liquidity', () => {
  it('loads the two correct tokens', () => {
    cy.visit('/add/0x5014d0abfc8428f0f8ccd0c5f010fe47569d8d34/0x78867BbEeF44f2326bF8DDd1941a4439382EF2A7')
    cy.get('#add-liquidity-input-tokena').should('contain.text', 'DOODA')
    cy.get('#add-liquidity-input-tokenb').should('contain.text', 'BUSD')
  })

  it('loads the BNB and tokens', () => {
    cy.visit('/add/BNB/0x5014d0abfc8428f0f8ccd0c5f010fe47569d8d34')
    cy.get('#add-liquidity-input-tokena').should('contain.text', 'BNB')
    cy.get('#add-liquidity-input-tokenb').should('contain.text', 'DOODA')
  })

  it('loads the WBNB and tokens', () => {
    cy.visit('/add/0xcde538bd8954ead01c56194f5c9905b310a5bd0e/0x5014d0abfc8428f0f8ccd0c5f010fe47569d8d34')
    cy.get('#add-liquidity-input-tokena').should('contain.text', 'WBNB')
    cy.get('#add-liquidity-input-tokenb').should('contain.text', 'DOODA')
  })

  it('does not crash if BNB is duplicated', () => {
    cy.visit('/add/BNB/BNB')
    cy.get('#add-liquidity-input-tokena').should('contain.text', 'BNB')
    cy.get('#add-liquidity-input-tokenb').should('not.contain.text', 'BNB')
  })

  it('does not crash if address is duplicated', () => {
    cy.visit('/add/0x5014d0abfc8428f0f8ccd0c5f010fe47569d8d34/0x5014d0abfc8428f0f8ccd0c5f010fe47569d8d34')
    cy.get('#add-liquidity-input-tokena').should('contain.text', 'DOODA')
    cy.get('#add-liquidity-input-tokenb').should('not.contain.text', 'DOODA')
  })

  it('token not in storage is loaded', () => {
    cy.visit('/add/0xD73DC0Fd8b59962AC9e3Ebe0F668D46662C6b8BC/0x5014d0abfc8428f0f8ccd0c5f010fe47569d8d34')
    cy.get('#add-liquidity-input-tokena').should('contain.text', 'SAC')
    cy.get('#add-liquidity-input-tokenb').should('contain.text', 'DOODA')
  })

  it('single token can be selected', () => {
    cy.visit('/add/0x637A86aFf37dF6cD3c6c16439a4bdeE32272Fdc7')
    cy.get('#add-liquidity-input-tokena').should('contain.text', 'TROAD')
    cy.visit('/add/0xeD24FC36d5Ee211Ea25A80239Fb8C4Cfd80f12Ee')
    cy.get('#add-liquidity-input-tokena').should('contain.text', 'BUSD')
    cy.visit('/add/BNB')
    cy.get('#add-liquidity-input-tokena').should('contain.text', 'BNB')
  })

  it('redirects /add/token-token to add/token/token', () => {
    cy.visit('/add/0x5014d0abfc8428f0f8ccd0c5f010fe47569d8d34-0x637A86aFf37dF6cD3c6c16439a4bdeE32272Fdc7')
    cy.url().should(
      'contain',
      '/add/0x5014d0abfc8428f0f8ccd0c5f010fe47569d8d34/0x637A86aFf37dF6cD3c6c16439a4bdeE32272Fdc7',
    )
  })

  it('redirects /add/BNB-token to /add/BNB/token', () => {
    cy.visit('/add/BNB-0x5014d0abfc8428f0f8ccd0c5f010fe47569d8d34')
    cy.url().should('contain', '/add/BNB/0x5014d0abfc8428f0f8ccd0c5f010fe47569d8d34')
  })

  it('redirects /add/token-BNB to /add/token/BNB', () => {
    cy.visit('/add/0x5014d0abfc8428f0f8ccd0c5f010fe47569d8d34-BNB')
    cy.url().should('contain', '/add/0x5014d0abfc8428f0f8ccd0c5f010fe47569d8d34/BNB')
  })

  it('redirects /add/WBNB-token to /add/WBNB/token', () => {
    cy.visit('/add/0xcde538bd8954ead01c56194f5c9905b310a5bd0e-0x5014d0abfc8428f0f8ccd0c5f010fe47569d8d34')
    cy.url().should(
      'contain',
      '/add/0xcde538bd8954ead01c56194f5c9905b310a5bd0e/0x5014d0abfc8428f0f8ccd0c5f010fe47569d8d34',
    )
  })

  it('redirects /add/token-WBNB to /add/token/WBNB', () => {
    cy.visit('/add/0x5014d0abfc8428f0f8ccd0c5f010fe47569d8d34-0xcde538bd8954ead01c56194f5c9905b310a5bd0e')
    cy.url().should(
      'contain',
      '/add/0x5014d0abfc8428f0f8ccd0c5f010fe47569d8d34/0xcde538bd8954ead01c56194f5c9905b310a5bd0e',
    )
  })
})
