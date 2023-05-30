import  express, {Request, Response} from 'express'
import argon from 'argon2'
// import * as dotenv from 'dotenv'
import 'dotenv/config'
import jwt from 'jsonwebtoken'
import {  checkParams, checkId, checkPartialParams} from './middleware'
import studentRouter from './studentsRouter'
import loginRouter from './loginRouter'

const {PORT} = process.env
const server = express(); 





server.use(express.json());
server.use("/students", studentRouter)
server.use("/user", loginRouter)
server.use(express.static('public'))

server.get('/', (req, res) => {
    res.send('OK')
})

// const passWrd= argon.hash("poopiPooP100").then((res)=> console.log(res))

server.use(checkId);
server.use(checkPartialParams)
server.use(checkParams);

server.listen(PORT, () => {console.log("listening")})


export{}









