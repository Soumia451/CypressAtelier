/// <reference types="cypress"/>

// Exo 1

describe("Scenario 1: Authentificatiion nominale", function () {
  it("Visiter le site", function () {
    cy.visit("https://www.saucedemo.com/");

    cy.get("[data-test=username]")
      .type("standard_user")
      .should("have.value", "standard_user");

    cy.get("[data-test=password]")
      .type("secret_sauce")
      .should("have.value", "secret_sauce");

    cy.get("[data-test=login-button]").click();
    cy.get("[data-test=secondary-header]").should("be.visible");
  });
});

describe("Scenario 2: Authentification en erreur", function () {
  it("Visiter le site", function () {
    cy.visit("https://www.saucedemo.com/");

    cy.get("[data-test=username]").type("user").should("have.value", "user");
    cy.get("[data-test=password]")
      .type("secret_sauce")
      .should("have.value", "secret_sauce");

    cy.get("[data-test=login-button]").click();
    cy.get("#root").should("be.visible");
  });
});

// Exo 2

describe("Scenario 1", function () {
  it("Visiter le site", function () {
    cy.visit("https://practice.automationtesteracademy.com/");
    cy.get("[data-test=username-login]")
      .type("login_user")
      .should("have.value", "login_user");

    cy.get("[data-test=password-login]")
      .type("cypress-geek")
      .should("have.value", "cypress-geek");

    cy.get("[data-test=submit-login]").click();
    cy.get("[data-test=title-products]").should("be.visible");
  });
});

describe("Scenario 2", function () {
  it("Visiter le site", function () {
    cy.visit("https://practice.automationtesteracademy.com/");

    cy.get("[data-test=username-login]")
      .type("geek_user")
      .should("have.value", "geek_user");

    cy.get("[data-test=password-login]")
      .type("cypress_geek")
      .should("have.value", "cypress_geek");

    cy.get("[data-test=submit-login]").click();
    cy.get(".error-message").should("contain", "Veuillez vérifier");
  });
});
