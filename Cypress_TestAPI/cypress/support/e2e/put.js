describe ('Testing API Users', () =>{
    it ('Update a user - PUT', () => {
        let body = {
                "name": "glory",
                "job": "QAE"
        }
        cy.request('PUT','/api/users/2', body).as('updateUsers');
        cy.get('@updateUsers').then(updateUsers => {
            expect(updateUsers.status).to.equal(200);
        });
    });

  



})