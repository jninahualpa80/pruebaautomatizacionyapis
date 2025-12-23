
import { sourcedemo } from '../../cypress/src/sourcedemo';

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})


describe("flujo compra", () => {

  beforeEach(() => {
    cy.visit('https://www.demoblaze.com/index.html')
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.wait(500)
  })

  it("Flujo", () => {
    // cy.visit('https://www.demoblaze.com/index.html')
    sourcedemo.Login()
    cy.wait(800)
    sourcedemo.select_elementos1()
    cy.wait(800)
    sourcedemo.select_elementos2()
    sourcedemo.placeholder()
  })

})