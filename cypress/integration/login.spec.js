/// <reference types="cypress" />

let Chance = require('chance');
const cypress = require('cypress');
let chance = new Chance();

describe('Cadastrar', () => {
    it('Cadastro de novo usuário', () => {
        cy.visit('/')
        cy.get('a[class="login"]').click()
        cy.get('input[id="email_create"]', { timeout:10000 }).type(chance.email())
        cy.get('button[id="SubmitCreate"]').click()

        cy.get('input[id="id_gender1"]').check()
        cy.get('input[id="customer_firstname"]').type(chance.name_prefix())
        cy.get('input[id="customer_lastname"]').type(chance.name_suffix())
        cy.get('input[id="email"]').type(chance.normal({domain: 'test.com'}))
        cy.get('input[id="passwd"]').type('123teste')
        cy.get('select[id="days"]').select('2')
        cy.get('select[id="months"]').select('December')
        cy.get('select[id="years"]').select('1990')

        cy.get('input[id="firstname"]').type(chance.name_prefix())
        cy.get('input[id="lastname"]').type(chance.name_suffix())
        cy.get('input[id="company"]').type(chance.company())
        cy.get('input[id="address1"]').type(chance.address())
        cy.get('input[id="address2"]').type(chance.locale())
        cy.get('input[id="city"]').type(chance.city())
        cy.get('select[id="id_state"]').select('Colorado')
        cy.get('input[id="postcode"]').type(chance.zip())
        cy.get('select[id="id_country"]').select('United States')
        cy.get('textarea[id="other"]').type(chance.profession())
        cy.get('input[id="phone"]').type(chance.phone())
        cy.get('input[id="phone_mobile"]').type(chance.phone())
        cy.get('input[id="alias"]').type(chance.address())

        cy.get('button[id="submitAccount"]').click()
        cy.get('p[class="info-account"').contains('Welcome to your account. Here you can manage all of your personal information and orders.')
    });
})