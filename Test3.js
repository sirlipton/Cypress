/// <reference types="Cypress" />
//cypress - Spec
describe('My Third Test Suite', function () {

it('My Third Test Case', function () {

//checkboxes    
cy.visit('https://rahulshettyacademy.com/AutomationPractice/#/')
cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1') 
cy.get('#checkBoxOption1').uncheck().should('not.be.checked') //unchecks option 1
cy.get('input[type="checkbox"]').check(['option2','option3']) //if array wasnt there, all would be checked

//Static dropdown
cy.get('select').select('option2').should('have.value','option2')

//Dynamic dropdown
cy.get('#autocomplete').type('United')
cy.get('.ui-menu-item div').each(($el, index, $list) => {
    if($el.text()==="United States (USA)") {
        cy.wrap($el).click()
    }


})
cy.get('#autocomplete').should('have.value','United States (USA)')

//Visibility of elements
cy.get('#displayed-text').should('be.visible')
cy.get('#hide-textbox').click()
cy.get('#displayed-text').should('not.be.visible') //hid and validated that textbox is gone
cy.get('#show-textbox').click()
cy.get('#displayed-text').should('be.visible') //showed and validated that textbox is there

//Radio buttons
cy.get('[value="radio2"]').check().should('be.checked')

})

})
