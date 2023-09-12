it ('Create a user - POST', () => {
    let body = {
            "email": Cypress.env('email'),
            "password": "yeyeye98"
    }
    console.log(body)
    cy.request('POST','/api/users', body).as('createUsers');
    cy.get('@createUsers').then(createUsers => {
        expect(createUsers.status).to.equal(201);
    });
});