import express, {Request, Response} from 'express'
import { checkId, checkParams, checkPartialParams, authenticate,adminAuth } from './middleware'



interface Body {
    id: number
    name: string
    email: string
  
  }
   let students: Body[] = [];
  
const router = express.Router()


//gets all students
router.get('/',authenticate, (req: Request, res: Response)=> {
    res.send(students)
})

//gets student by id
router.get("/:id",authenticate, checkId,(req: Request, res: Response)=> {

    const id = parseInt(req.params.id);
    const student = students.find(stu => stu.id === id);
  
    return !student 
      ? res.status(404).send("you fucked up") 
      : res.status(201).send(student);
       
  })


  //!adminAuth not working
  router.put( "/:id", authenticate, adminAuth, checkPartialParams,  (req: Request, res: Response) => {
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
    res.status(204).send(students);
 
  }
);

//! adminAuth not working
//create new student object
router.post("/register",authenticate,adminAuth, checkParams, (req: Request, res: Response) => {
    const body: Body = req.body;
    students.push(body)
    res.status(200).send()
  });


//! adminAuth not working
router.delete("/:id",authenticate,adminAuth, checkId, (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const studentExists = students.find(student => student.id === id);
  
    if (!studentExists) {
      res.status(404).send("student doesnt exist");
    }
  
    students = students.filter(student => student.id !== id);
    res.status(204).send();
  });
  

  export default router