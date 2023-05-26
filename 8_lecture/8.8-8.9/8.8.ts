import  express, {Request, Response} from 'express'
import {  logger,checkParams, checkId, checkPartialParams} from './middleware'

interface Body {
  id: number
  name: string
  email: string

}

const server = express(); 
server.use(express.json());
server.use(logger)
let students: Body[] = [];

//Gets all students
server.get("/students", (req: Request, res: Response) => {
  res.send(students);
});

//Posts new student object
server.post("/student", checkParams, (req: Request, res: Response) => {
  const body: Body = req.body;
  students.push(body)
  res.status(201).send()
});

//Gets student by id number and return error if doesnt exist
server.get("/student/:id", checkId,(req: Request, res: Response)=> {

  const id = parseInt(req.params.id);
  const student = students.find(stu => stu.id === id);

  return !student 
    ? res.status(404).send("you fucked up") 
    : res.status(201).send(student);
     
})

//modifies existing student or returns error if !student
server.put( "/student/:id",  checkPartialParams,  (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const body: Body = req.body;
    const studentExists = students.find((student) => student.id === id)

    if(!studentExists){
      res.status(404).send("student doesnt exist")
    }

    students = students.map(student => {
      if (student.id === id) {
        return { ...student, ...body };
      }
      return student;
    });
    res.status(204).send();
 
  }
);

//deletes studetn by id

server.delete("/student/:id", checkId, (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const studentExists = students.find(student => student.id === id);

  if (!studentExists) {
    res.status(404).send("student doesnt exist");
  }

  students = students.filter(student => student.id !== id);
  res.status(204).send();
});


server.use(checkId);
server.use(checkPartialParams)
server.use(checkParams);

server.listen(3000, () => {console.log("listening")})


export{}









