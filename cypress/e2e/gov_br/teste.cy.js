/// <reference types="cypress" />
it('Pesquisar sobre INSS', function() {
  cy.visit('https://www.gov.br/pt-br')
  cy.get('#barra-govbr').shadow().find('div.overlay-wrapper').click();
  cy.get('#searchtext-input').click();
  cy.get('#searchtext-input').type('a'.repeat(1000));
  cy.get('#searchtext-input').type('{enter}')
  
});