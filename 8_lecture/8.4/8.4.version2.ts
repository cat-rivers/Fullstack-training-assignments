import express, {Request, Response} from 'express'

const server = express()//server is type express

server.listen(3000, () => {
  console.log('listening to port 3000')
})

interface Users {
  [key: string]: number;
}

let users: Users = {};

server.get("/counter/:name", (_req: Request, res: Response) => {
  const name = _req.params.name;
  if (name && !users[name]) {
    users[name] = 0;
  }
  ++users[name];
  res.send(`${name} was here ${users[name]} times`);
  console.log(users);
});

