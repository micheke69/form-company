import {data} from '../../fixtures/data';

export class FormPage {

    setValidData(){
        cy.get('[data-cy="name-input"]').clear().type(data.name);
        cy.get('[data-cy="nip-input"]').clear().type(data.nip);
        cy.get('[data-cy="address-input"]').clear().type(data.address);
        cy.get('[data-cy="web-input"]').clear().type(data.web);
        cy.get('[data-cy="email-input"]').clear().type(data.email);
        cy.get('[data-cy="phone-input"]').clear().type(data.phone);

    }
}

export const fillForm = new FormPage();