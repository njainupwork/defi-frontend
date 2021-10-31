describe('Send', () => {
  it('should redirect', () => {
    cy.visit('/send')
    cy.url().should('include', '/swap')
  })

  it('should redirect with url params', () => {
    cy.visit(
      '/send?inputCurrency=0xC0063D362A8EA40Cb32A774c75683429c2B4860c&outputCurrency=0x2904940De789B2034D5bA883bD049BA71d54Ef51',
    )
    cy.url().should(
      'contain',
      '/swap?inputCurrency=0xC0063D362A8EA40Cb32A774c75683429c2B4860c&outputCurrency=0x2904940De789B2034D5bA883bD049BA71d54Ef51',
    )
  })
})
