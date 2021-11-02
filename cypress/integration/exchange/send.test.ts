describe('Send', () => {
  it('should redirect', () => {
    cy.visit('/send')
    cy.url().should('include', '/swap')
  })

  it('should redirect with url params', () => {
    cy.visit(
      '/send?inputCurrency=0xC0063D362A8EA40Cb32A774c75683429c2B4860c&outputCurrency=0xa6902946F5F20d875Cb1E337EBA5E769B89D89e2',
    )
    cy.url().should(
      'contain',
      '/swap?inputCurrency=0xC0063D362A8EA40Cb32A774c75683429c2B4860c&outputCurrency=0xa6902946F5F20d875Cb1E337EBA5E769B89D89e2',
    )
  })
})
