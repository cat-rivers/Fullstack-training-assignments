import  express, {Request, Response} from 'express'
// const express = require('express');
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


server.put("/student/:id",checkParams, (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const body: Body = req.body;
  let student = students.map(stu => {
    if (stu.id === id) {
      const result = { ...stu, name: body.name, email: body.email };
      console.log(result)
      return result
     
    }else{
      res.status(400).send("you fucked up")
    }
  })
//! able to modify student object but still need to replace from students array
  res.status(201).send(student)
  console.log(student)
  

  // res.send("put request called")
});

server.use(checkParams);
server.use(checkId);

server.listen(3000, () => {console.log("listening")})


export{}





