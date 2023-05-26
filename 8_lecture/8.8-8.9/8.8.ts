import  express, {Request, Response} from 'express'
import {  checkParams, checkId, checkPartialParams} from './middleware'

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


server.put("/student/:id",checkPartialParams, (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const studentIndex = students.findIndex((stu) => stu.id === id)

  const body: Body = req.body;
  let student = students.map(stu => {
    if (stu.id === id) {
  
      students[studentIndex] = {...students[studentIndex],
        name: body.name || stu.name, email: body.email || stu.email
      }
      return students[studentIndex]
     
    }else{
      res.status(404).send("Student not found")
    }
  })
  res.status(204).send()
  console.log(student)
  

  // res.send("put request called")
});

server.use(checkPartialParams)
server.use(checkParams);
server.use(checkId);

server.listen(3000, () => {console.log("listening")})


export{}





