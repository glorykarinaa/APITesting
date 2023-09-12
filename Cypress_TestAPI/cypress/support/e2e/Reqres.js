describe ('Testing API Users', () =>{
    it ('Register a user - POST', () => {
        let body = {
                "email": "eve.holt@reqres.in",
                "password": "pistol"
        }
        console.log(body)
        cy.request('POST','/api/register', body).as('registUsers');
        cy.get('@registUsers').then(registUsers => {
            expect(registUsers.status).to.equal(200);
        });
    });

  



})