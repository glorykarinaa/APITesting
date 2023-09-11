const request = require ('supertest')
const baseUrl = require('../../env')

describe('Put Request', () => {
    it('Update User', async () => {
        const response = request(baseUrl())
        .put('/api/users/2')
        .send({
            "name": "Glory K H Sitohang",
            "job": "QA Engineer"
        })
        console.log((await response).status)
        console.log((await response).body)
    })
})