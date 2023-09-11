const { expect } = require('chai')
const request = require('supertest')



describe('Chai Assert - Post Create User', () => {
    const response = request ('https://reqres.in')
    .post('/api/users')
    .send({
        "name": "GloryKHS",
        "job": "QA Engineer"
    })
    
    it('response status equal to 201', async () => {
        expect((await response).status).to.equal(201)
    })
    it('response body to have property', async () => {
        expect((await response).body).to.haveOwnProperty(`createdAt`)

    })

    //Reporting in mochawesome
})

describe('Get List User', () => {
    const response = request ('https://reqres.in')
    .get('/api/users?page=2')
    it('response status equal to 200', async () => {
        expect((await response).status).to.equal(200)
    })
    it('response body to have property', async () => {
        expect((await response).body).to.haveOwnProperty(`page`)
        expect((await response).body).to.haveOwnProperty(`per_page`)
        expect((await response).body).to.haveOwnProperty(`total`)
        expect((await response).body).to.haveOwnProperty(`total_pages`)
    })
})

describe('Put Update User', () => {
    const response = request ('https://reqres.in')
    .put('/api/users/2')
    it('response status equal to 200', async () => {
        expect((await response).status).to.equal(200)
    })
    it('response body to have property', async () => {
        expect((await response).body).to.haveOwnProperty(`updatedAt`)
    })
})
