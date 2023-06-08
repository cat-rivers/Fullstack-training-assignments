import request from 'supertest'
import server from '../src/server'


describe('Server', () => {
    it('Returns 404 on invalid address', async () => {
        const response = await request(server)
            .get('/randomendpoint')
        expect(response.statusCode).toBe(404)
    })
    it('Returns OK ', async () => {
        const response = await request(server)
            .get('/', )
        expect(response.statusCode).toBe(200)
        expect(response.text).toEqual('OK')
    })


    it("returns 200 when body includes parameters", async () => {
        const response = await request(server)
            .post('/user/register' )
            .send({username: "foo", password: "bar" })
        expect(response.statusCode).toBe(200)
    
    })

    it("returns 401 if  userdoesnt exist", async () => {
        const response = await request(server)
            .post('/user/login' )
            .send({username: "catalina", password: "poop"})
        expect(response.statusCode).toBe(401)
    
    })
})
