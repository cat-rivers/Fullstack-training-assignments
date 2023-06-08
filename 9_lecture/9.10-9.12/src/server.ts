import express,{Response, Request} from "express"
import userRouter from "./userRouter"
import {endPointNotFound, logger} from "./middleware"
import booksRouter from "./booksRouter"
import helmet from "helmet" 
const server = express() 


server.use(logger)
server.use(helmet())
server.use(express.json())

server.use("/api/v1/books", booksRouter)
server.use("/api/v1/user", userRouter)

server.get('/', (req, res) => {
    res.send('OK')
})


server.use(endPointNotFound)




export default server

