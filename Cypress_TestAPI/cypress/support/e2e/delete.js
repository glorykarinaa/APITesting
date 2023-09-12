describe ('Testing API List Resource', () =>{
    it ('Delete User - DELETE', () => {
        cy.request('/api/users/2').as('deleteUser');
        cy.get('@deleteUser').then(deleteUser => {
            expect(deleteUser.status).to.equal(200);
        })
    })
})
