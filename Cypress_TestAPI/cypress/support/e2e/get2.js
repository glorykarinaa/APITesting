describe ('Testing API List Resource', () =>{
it('Get List User'), () => {
    cy.request('/api/users?page=2').as('listUser');
    cy.get('@listUser').then(listUser => {
        expect(listUser.status).to.equal(200);
    });
    }
})