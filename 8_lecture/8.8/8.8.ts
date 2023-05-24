import express, {Request, Response} from 'express'
import {  checkParams, checkId} from './middleware'

interface Body {
  id: number
  name: string
  email: string

}

const server = express(); //server is type express
server.use(express.json());

const students: Body[] = [];


server.get("/students", (req: Request, res: Response) => {
  res.send(students);
});


server.post("/student", checkParams, (req: Request, res: Response) => {
  const body: Body = req.body;
  console.log("post student:", body)
  students.push(body)
  res.status(201).send()
});




server.get("/student/:id", checkId,(req: Request, res: Response)=> {

  const id = parseInt(req.params.id);
  const student = students.find(stu => stu.id === id);

  return !student 
    ? res.status(404).send("you fucked up") 
    : res.status(201).send(student);
    
  
 
})

server.use(checkParams);
server.use(checkId)

server.listen(3000, () => {console.log("listening")})


export{}



