import  express, {Request, Response} from 'express'
import argon from 'argon2'
// import * as dotenv from 'dotenv'
import 'dotenv/config'
import jwt from 'jsonwebtoken'


const {PORT} = process.env
const server = express(); 
server.use(express.json());
server.use(express.static('public'))

server.get('/', (req, res) => {
    res.send('OK')
})


const payload = { username: 'sugarplumfairy'}
const secret = process.env.SECRET ?? ''
const options = {expiresIn:'15m'}


const token = jwt.sign(payload, secret ,options)
// console.log(token)


//Command line token verifier
const tokenToVerify = process.env.TOKEN ?? ''
const secretKey = process.env.SECRET ?? ''

const verifyMyToken = () => {
    const decoded = jwt.verify(tokenToVerify, secretKey)
    console.log(decoded) 
}

verifyMyToken()

server.listen(PORT, () => {console.log("listening")})


export{}









