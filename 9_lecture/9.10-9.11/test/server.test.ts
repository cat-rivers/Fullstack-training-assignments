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


    it("returns 200 if login password and username are correct", async () => {
        const response = await request(server)
            .post('/api/v1/user/login' )
            .send({username: "catalina", password: "poop" })
        expect(response.statusCode).toBe(200)
    
    })
    it("returns 401 if login password is wrong", async () => {
        const response = await request(server)
            .post('/api/v1/user/login' )
            .send({username: "catalina", password: "bloob" })
        expect(response.statusCode).toBe(401)
  
    })

    it("returns 401 if username is not found", async () => {
        const response = await request(server)
            .post('/api/v1/user/login' )
            .send({username: "clata", password: "poop" })
        expect(response.statusCode).toBe(401)

    })

    it("login user if username is unique and password is provided", async () => {
        const response = await request(server)
            .post('/api/v1/user/register' )
            .send({username: "poop", password: "poop"})
        expect(response.statusCode).toBe(200)
    
    })
})
