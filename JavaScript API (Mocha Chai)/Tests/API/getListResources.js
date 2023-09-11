const request = require ('supertest')
const baseUrl = require('../../env')

describe('Get Request', () => {
    it('Find Resources ', async () => {
        const response = request(baseUrl())
        .get('/api/unknown')
        console.log((await response).status)
        console.log((await response).body)
    })
})