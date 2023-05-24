import http, {IncomingMessage, ServerResponse} from 'http'

const server = http.createServer((_req: IncomingMessage, res: ServerResponse)=> {
  res.write('Hello world poopy head :)')
  res.end()
})


const port = 3000

server.listen(port)
console.log("listening to port", port)