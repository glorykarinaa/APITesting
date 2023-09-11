const request = require ('supertest')
const baseUrl = require('../../env')

describe('Post Request', () => {
    it('Create User', async () => {
        const response = request(baseUrl())
        .post('/api/register')
        .send({
            "email": "glorykarina01@gmail.com",
            "password": "rawrrawr01"
        })
        console.log((await response).status)
        console.log((await response).body)
    })
})