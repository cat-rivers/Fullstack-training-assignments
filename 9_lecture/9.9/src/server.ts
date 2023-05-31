import express, {Request, Response} from 'express'


const server = express()



server.get("/", (req: Request, res: Response) => {
    res.send("hello world")
})


export default server