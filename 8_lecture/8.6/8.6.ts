import express, {Request, Response, NextFunction} from 'express'
import { middlewear, endPointNotFound /*, errorHandling*/} from './middlewear'

const server = express()//server is type express

const students = [{}]







server.get("/students", (req: Request, res: Response) => {
  res.send(students);
});

server.use(middlewear);

server.use(endPointNotFound)

server.listen(3000)