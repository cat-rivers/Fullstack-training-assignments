import  express, {Request, Response} from 'express'

import 'dotenv/config'
import {   endPointNotFound} from './middleware'
import studentRouter from './studentsRouter'
import loginRouter from './loginRouter'

const server = express(); 





server.use(express.json());
server.use("/students", studentRouter)
server.use("/user", loginRouter)
// server.use(express.static('public'))

server.get('/', (req, res) => {
    res.send('OK')
})

// const passWrd= argon.hash("poopiPooP100").then((res)=> console.log(res))


server.use(endPointNotFound)




export default server









