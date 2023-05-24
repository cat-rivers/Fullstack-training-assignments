import express, {Request, Response, NextFunction} from 'express'
import { middlewear, endPointNotFound } from './middlewear'

const server = express()//server is type express
server.use(express.json())

const students = [{}]
server.listen(3000, () => {console.log("listening")})
server.use(middlewear);

server.get("/students", (req: Request, res: Response) => {
  res.send(students);
});



server.use(endPointNotFound)

