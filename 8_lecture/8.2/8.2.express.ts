import express, {Request, Response} from 'express'

const server = express()//server is type express

server.listen(3000, () => {
  console.log('listening to port 3000')
})

server.get('/', (_req: Request, res: Response) => {
  res.send("hello world :)")
})

server.get('/poopbar', (_req: Request, res: Response) => {
  res.send("foobar poopbar")
})