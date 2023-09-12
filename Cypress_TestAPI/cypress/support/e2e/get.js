describe ('Testing API List Resource', () =>{
    it ('get list resource - GET', () => {
        cy.request('/api/unknown').as('getListResources');
        cy.get('@getListResources').then(resources => {
            expect(resources.status).to.equal(200);
        })
    })
})
