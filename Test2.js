/// <reference types="Cypress" />
//cypress - Spec
describe('My Second Test Suite', function () {

it('My First Test Case', function () {

cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/') // do not include www. in the URL
//fixture will load the data from the file

cy.get('.search-keyword').type('ca')
// Selenium get hits url in browser, Cypress acts like findElement from Selenium
cy.wait(2000) 

cy.get('.products').as('productLocator') //aliasing to reuse locators
cy.get('@productLocator').find('.product').each(($el, index, $list) => {

const textVeg = $el.find('.product-name').text()
if(textVeg.includes('Cashews')) {
    cy.wrap($el.find('button')).click() // needs cy.wrap to work with jQuery element
}
})
cy.get('.cart-icon > img').click()
cy.contains('PROCEED TO CHECKOUT').click()
cy.contains('Place Order').click()
cy.get('select').select('United States')
cy.get('.chkAgree').click()
cy.contains('Proceed').click()


} )

} )