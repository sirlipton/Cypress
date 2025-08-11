/// <reference types="Cypress" />
//cypress - Spec
describe('My First Test Suite', function () {

it('My First Test Case', function () {

cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/') // do not include www. in the URL
//fixture will load the data from the file

cy.get('.search-keyword').type('ca')
// Selenium get hits url in browser, Cypress acts like findElement from Selenium
cy.wait(2000) 

cy.get('.product').should('have.length', 5) 
cy.get('.product:visible').should('have.length', 4) 
// there were 5 products, but one is hidden - adding :visible will only select visible elements
cy.get('.products').as('productLocator') //aliasing to reuse locators
cy.get('@productLocator').find('.product').should('have.length', 4)
cy.get(':nth-child(3) > .product-name').click()
//this isn't as reliable since the nth child can change if number of items change or if prices change
cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click().then(function() {
    console.log('sf') //will print in test runner information    
}) //adds 3rd product to cart

//console.log('sf') //not related to cypress and prints in chrome devtool console
cy.get('@productLocator').find('.product').each(($el, index, $list) => {

const textVeg = $el.find('.product-name').text()
if(textVeg.includes('Cashews')) {
    cy.wrap($el.find('button')).click() // needs cy.wrap to work with jQuery element
}
})
//assert if logo text is correctly displayed
cy.get('.brand').should('have.text','GREENKART')

//this is to print in logs
cy.get('.brand').then(function(logoelement)  {
    cy.log(logoelement.text())

})
//const logo=cy.get('.brand') non cypress commands cannot resolve promise by themselves, resolve it with then()
//    cy.log(logo.text()) 



} )

} )