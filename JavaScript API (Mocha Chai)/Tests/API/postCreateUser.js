const request = require ('supertest')
const baseUrl = require('../../env')

describe('Post Request', () => {
    it('Create User', async () => {
        const response = request(baseUrl())
        .post('/api/users')
        .send({
            "name": "GloryKHS",
            "job": "QA Engineer"
        })
        console.log((await response).status)
        console.log((await response).body)
    })
})