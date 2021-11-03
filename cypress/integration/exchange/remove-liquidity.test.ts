describe('Remove Liquidity', () => {
  it('redirects from address-address to address/address', () => {
    cy.visit('/remove/0x5014d0abfc8428f0f8ccd0c5f010fe47569d8d34-0xC0063D362A8EA40Cb32A774c75683429c2B4860c')
    cy.url().should(
      'contain',
      '/remove/0x5014d0abfc8428f0f8ccd0c5f010fe47569d8d34/0xC0063D362A8EA40Cb32A774c75683429c2B4860c',
    )
  })

  it('bnb-cake remove', () => {
    cy.visit('/remove/BNB/0x5014d0abfc8428f0f8ccd0c5f010fe47569d8d34')
    cy.get('#remove-liquidity-tokena-symbol').should('contain.text', 'BNB')
    cy.get('#remove-liquidity-tokenb-symbol').should('contain.text', 'DOODA')
  })

  it('cake-bnb remove', () => {
    cy.visit('/remove/0x5014d0abfc8428f0f8ccd0c5f010fe47569d8d34/BNB')
    cy.get('#remove-liquidity-tokena-symbol').should('contain.text', 'DOODA')
    cy.get('#remove-liquidity-tokenb-symbol').should('contain.text', 'BNB')
  })

  it('loads the two correct tokens', () => {
    cy.visit('/remove/0x5014d0abfc8428f0f8ccd0c5f010fe47569d8d34/0xC0063D362A8EA40Cb32A774c75683429c2B4860c')
    cy.get('#remove-liquidity-tokena-symbol').should('contain.text', 'DOODA')
    cy.get('#remove-liquidity-tokenb-symbol').should('contain.text', 'BUSD')
  })

  it('does not crash if BNB is duplicated', () => {
    cy.visit('/remove/BNB/BNB')
    cy.get('#remove-liquidity-tokena-symbol').should('contain.text', 'BNB')
    cy.get('#remove-liquidity-tokenb-symbol').should('contain.text', 'BNB')
  })

  it('does not crash if token is duplicated', () => {
    cy.visit('/remove/0x5014d0abfc8428f0f8ccd0c5f010fe47569d8d34/0x5014d0abfc8428f0f8ccd0c5f010fe47569d8d34')
    cy.get('#remove-liquidity-tokena-symbol').should('contain.text', 'DOODA')
    cy.get('#remove-liquidity-tokenb-symbol').should('contain.text', 'DOODA')
  })

  it('token not in storage is loaded', () => {
    cy.visit('/remove/0x637A86aFf37dF6cD3c6c16439a4bdeE32272Fdc7/0x5014d0abfc8428f0f8ccd0c5f010fe47569d8d34')
    cy.get('#remove-liquidity-tokena-symbol').should('contain.text', 'TROAD')
    cy.get('#remove-liquidity-tokenb-symbol').should('contain.text', 'DOODA')
  })
})
