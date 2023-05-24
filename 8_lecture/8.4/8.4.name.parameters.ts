import express, {Request, Response} from 'express'

const server = express()//server is type express

server.listen(3000, () => {
  console.log('listening to port 3000')
})
let counter = {
  
  count: 0,
  name : " "
}
let arr = [counter]

server.get('/counter', (_req: Request, res: Response) => {
  counter.count++
  counter.name = "no name available "
  res.send(counter)
})

server.get('/counter/:name', (_req: Request, res: Response) => {
  const name = _req.params.name.toString();
  const foundObj = arr.find(obj => obj.name === name);

  if (foundObj) {
    foundObj.count++;
    res.send(foundObj);
  } else {
    const ownCounter = {
      ...counter,
      count: counter.count + 1,
      name: name,
    };
    arr.push(ownCounter);
    res.send(ownCounter);
  }
 
})
