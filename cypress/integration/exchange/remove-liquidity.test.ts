describe('Remove Liquidity', () => {
  it('redirects from address-address to address/address', () => {
    cy.visit('/remove/0x2904940De789B2034D5bA883bD049BA71d54Ef51-0xC0063D362A8EA40Cb32A774c75683429c2B4860c')
    cy.url().should(
      'contain',
      '/remove/0x2904940De789B2034D5bA883bD049BA71d54Ef51/0xC0063D362A8EA40Cb32A774c75683429c2B4860c',
    )
  })

  it('bnb-cake remove', () => {
    cy.visit('/remove/BNB/0x2904940De789B2034D5bA883bD049BA71d54Ef51')
    cy.get('#remove-liquidity-tokena-symbol').should('contain.text', 'BNB')
    cy.get('#remove-liquidity-tokenb-symbol').should('contain.text', 'CAKE')
  })

  it('cake-bnb remove', () => {
    cy.visit('/remove/0x2904940De789B2034D5bA883bD049BA71d54Ef51/BNB')
    cy.get('#remove-liquidity-tokena-symbol').should('contain.text', 'CAKE')
    cy.get('#remove-liquidity-tokenb-symbol').should('contain.text', 'BNB')
  })

  it('loads the two correct tokens', () => {
    cy.visit('/remove/0x2904940De789B2034D5bA883bD049BA71d54Ef51/0xC0063D362A8EA40Cb32A774c75683429c2B4860c')
    cy.get('#remove-liquidity-tokena-symbol').should('contain.text', 'CAKE')
    cy.get('#remove-liquidity-tokenb-symbol').should('contain.text', 'BUSD')
  })

  it('does not crash if BNB is duplicated', () => {
    cy.visit('/remove/BNB/BNB')
    cy.get('#remove-liquidity-tokena-symbol').should('contain.text', 'BNB')
    cy.get('#remove-liquidity-tokenb-symbol').should('contain.text', 'BNB')
  })

  it('does not crash if token is duplicated', () => {
    cy.visit('/remove/0x2904940De789B2034D5bA883bD049BA71d54Ef51/0x2904940De789B2034D5bA883bD049BA71d54Ef51')
    cy.get('#remove-liquidity-tokena-symbol').should('contain.text', 'CAKE')
    cy.get('#remove-liquidity-tokenb-symbol').should('contain.text', 'CAKE')
  })

  it('token not in storage is loaded', () => {
    cy.visit('/remove/0xD74b782E05AA25c50e7330Af541d46E18f36661C/0x2904940De789B2034D5bA883bD049BA71d54Ef51')
    cy.get('#remove-liquidity-tokena-symbol').should('contain.text', 'QUACK')
    cy.get('#remove-liquidity-tokenb-symbol').should('contain.text', 'CAKE')
  })
})
