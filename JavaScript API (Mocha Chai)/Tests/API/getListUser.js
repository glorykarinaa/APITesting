const request = require ('supertest')
const baseUrl = require('../../env')

describe('Get Request', () => {
    it('Find Users in the page 2', async () => {
        const response = request(baseUrl())
        .get('/api/users?page=2')
        console.log((await response).status)
        console.log((await response).body)
    })
})