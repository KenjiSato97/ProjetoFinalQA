/// <reference types="cypress" />
context('GOV.BR Pesquisa', () => {
  beforeEach(() => {
    cy.visit('https://www.gov.br/pt-br')
    cy.get('#barra-govbr').shadow().find('div.overlay-wrapper').click()
    cy.wait(5000);
  });

  it('Instagram', function() {
  cy.get('button.reject-all').click();
  cy.get('#portal-footer a[href="https://www.instagram.com/governodobrasil"]').click();
  
});

  it('Facebook', function() {
  cy.get('button.reject-all').click();
  cy.get('#portal-footer a[href="https://www.facebook.com/governodobrasil"]').click();
  
});

  it('Youtube', function() {
  cy.get('button.reject-all').click();
  cy.get('#portal-footer a[href="https://www.youtube.com/governodobrasil"]').click();
  
});

  it('Linkedin', function() {
  cy.get('button.reject-all').click();
  cy.get('#portal-footer a[href="https://linkedin.com/company/governo-do-brasil"]').click();
  
});

  it('Whatsapp', function() {
  cy.get('button.reject-all').click();
cy.get('#portal-footer a[href="https://www.whatsapp.com/channel/0029Va2zbqm7dmeR3lddrp38"]').click();  
});

  it('Tiktok', function() {
  cy.get('button.reject-all').click();
  cy.get('#portal-footer a[href="https://www.tiktok.com/governodobr"]').click();
  
});

  it('Kwai', function() {
  cy.get('button.reject-all').click();
  cy.get('#portal-footer a[href="https://www.kwai.com/@governodobr"]').click();
  
});
});


