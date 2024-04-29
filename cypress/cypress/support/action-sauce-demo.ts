export default class homePage {
  fillUsername = (username: string) => {
    cy.get('[data-test="username"]').should("exist").type(username);
  };

  fillPassword = (password: string) => {
    cy.get('[data-test="password"]').should("exist").type(password);
  };

  clickLoginButton = () => {
    cy.get('[data-test="login-button"]').should("have.value", "Login").click();
  };

  verifySauceDemoPage = () => {
    cy.get("#login_button_container").should("exist");
    cy.get("#login_credentials").should("exist");
    cy.get('[data-test="username"]').should("have.text", "");
    cy.get('[data-test="password"]').should("have.text", "");
    cy.get('[data-test="login-button"]').should("have.value", "Login");
  };

  expectedResult(locator: string, assert: string, value: string) {
    cy.get(locator).should(assert,value)
  }

}
