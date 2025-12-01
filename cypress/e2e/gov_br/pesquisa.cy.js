/// <reference types="cypress" />
context('GOV.BR Pesquisa', () => {
  beforeEach(() => {
    cy.visit('https://www.gov.br/pt-br')
    cy.get('#barra-govbr').shadow().find('div.overlay-wrapper').click();
  });
it('Pesquisar sobre INSS', function() {
  cy.get('#searchtext-input').click();
  cy.get('#searchtext-input').type('INSS{enter}');
  
});

  it('Testar numero maximo de caracteres', function() {
    const maxLength = 200000;
    const longText = 'asr'.repeat(maxLength);

    cy.get('#searchtext-input')
      .invoke('val', longText)
      .trigger('input');
    
    cy.get('#searchtext-input').type('{enter}');

  });
 
})
