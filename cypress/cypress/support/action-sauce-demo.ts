export const fillUsername = (username: string) => {

    cy.get('[data-test="username"]').should('exist')
        .type(username);
}

export const fillPassword = (password: string) => {

    cy.get('[data-test="password"]').should('exist')
        .type(password);
}

export const clickLoginButton = () => {

    cy.get('[data-test="login-button"]').should('have.value', 'Login')
        .click();
}