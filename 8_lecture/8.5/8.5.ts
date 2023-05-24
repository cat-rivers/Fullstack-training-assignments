import express, {Request, Response, NextFunction} from 'express'


const server = express()//server is type express

const students = [{}]

server.listen(3000, () => {
  console.log('listening to port 3000')
})

const middlewear = (req: Request, res: Response, next: NextFunction) => {
  const reqTime = new Date();
  const method = req.method;
  const url = req.url;
  console.log({ requestTime: reqTime, method: method, requestUrl: url });
  next();
};

server.use(middlewear);

server.get("/students", (req: Request, res: Response) => {
  res.send(students);
});