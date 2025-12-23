class Sourcedemo {
  elements = {
    UserName: () => cy.get('#loginusername'),
    Password: () => cy.get('#loginpassword'),
    LoginButton: () => cy.get('#login2'),
    ErrorMessage: () => cy.get('[data-test="error"]'),
    singup: () => cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary'),
    articulo1: () => cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch'),
    articulo2: () => cy.get(':nth-child(9) > .card > .card-block > .card-title > .hrefch'),
    addcard: () => cy.get('.col-sm-12 > .btn'),
    card: () => cy.get('#cartur'),
    placeorden: () => cy.get('.col-lg-1 > .btn'),
    home: () => cy.get('.active > .nav-link'),
    name: () => cy.get('#name'),
    country: () => cy.get('#country'),
    city: () => cy.get('#city'),
    cardplace: () => cy.get('#card'),
    month: () => cy.get('#month'),
    year: () => cy.get('#year'),
    ordermodal: () => cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary'),
    alert: () => cy.get('.sweet-alert > h2'),
    confirm: () => cy.get('.confirm'),
    mensaje_login: () => cy.get('#nameofuser')
  }

  Login() {

    this.elements.LoginButton().click()
    cy.wait(500)
    this.elements.UserName().type("standard_user")
    this.elements.Password().type("secret_sauce")
    this.elements.singup().click()
    this.elements.mensaje_login().contains("standard_user")
  }
  select_elementos1() {
    this.elements.articulo1().click()
    this.elements.addcard().click()
    this.elements.home().click()
  }
  select_elementos2() {
    this.elements.articulo2().click()
    this.elements.addcard().click()
    this.elements.home().click()

  }

  placeholder() {
    this.elements.card().click()
    this.elements.placeorden().click()
    cy.wait(800)
    this.elements.name().type("JUAN NINAHUALPA")
    this.elements.city().type("QUITO")
    this.elements.cardplace().type("123")
    this.elements.country().type("ECUADOR")
    this.elements.month().type("12")
    this.elements.year().type("2025")
    this.elements.ordermodal().click()
    this.elements.alert().contains("Thank you for your purchase")

  }
}
export const sourcedemo = new Sourcedemo() 