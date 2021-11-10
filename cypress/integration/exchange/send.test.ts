describe('Send', () => {
  it('should redirect', () => {
    cy.visit('/send')
    cy.url().should('include', '/swap')
  })

  it('should redirect with url params', () => {
    cy.visit(
      '/send?inputCurrency=0xC0063D362A8EA40Cb32A774c75683429c2B4860c&outputCurrency=0x5014d0abfc8428f0f8ccd0c5f010fe47569d8d34',
    )
    cy.url().should(
      'contain',
      '/swap?inputCurrency=0xC0063D362A8EA40Cb32A774c75683429c2B4860c&outputCurrency=0x5014d0abfc8428f0f8ccd0c5f010fe47569d8d34',
    )
  })
})
