/// <reference types="Cypress" />

import { fillForm } from "../support/page-objects/form-page";

describe('Testing Form Company', () => {


    it('Inputs should be empty and the submit button disabled.', () => {
        cy.openHomePage();

        cy.get('input').each(input => {
            expect(input.text()).empty;
        })

        cy.get('button').should('be.disabled');
    });

    it('Name input should be required', () => {
        cy.get('[data-cy="name-input"]')
        .type('Hola')
        .clear()
        .blur()
        .siblings('span')
        .should('have.text', 'Name is required.');
    })

    it('Nip should have 9 numbers', () => {
        cy.get('[data-cy="nip-input"]')
        .type('1123')
        .blur()
        .siblings('span')
        .should('have.text', 'Nip must have 9 numbers.');
    })
    
    it('Address should have less than 20 characters.', () => {
        cy.get('[data-cy="address-input"]')
        .type('Avenida Casa Blanca #3, Reparte Guiteras, Habana del Este')
        .blur()
        .siblings('span')
        .should('have.text', 'Address must have less than 20 characters.');
    })

    it('Web input should be a valid url', () => {
        cy.get('[data-cy="web-input"]')
        .type('httpmichel')
        .blur()
        .siblings('span')
        .should('have.text', 'Web must be a valid URL.');
    })

    it('Email input should be a valid email address', () => {
        cy.get('[data-cy="email-input"]')
        .type('michel2015.com')
        .blur()
        .siblings('span')
        .should('have.text', 'Email is not valid.');
    })

    it('Phone input should be a valid phone number', () => {
        cy.get('[data-cy="phone-input"]')
        .type('555-555-555')
        .blur()
        .siblings('span')
        .should('have.text', 'Phone number format is not valid.');
    })
    
    it('Submit button should be available with valid data.',()=>{
        fillForm.setValidData();
        cy.get('button').should('be.enabled');
    })

})