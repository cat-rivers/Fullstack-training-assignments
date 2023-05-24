import express, {Request, Response} from 'express'

const server = express()//server is type express

server.listen(3000, () => {
  console.log('listening to port 3000')
})
let counter = {
  count : 0
}
server.get('/counter', (_req: Request, res: Response) => {
  counter.count++
  if (_req.query?.number){
    counter.count = Number(_req.query.number)
}
  res.send( counter)
})




