//API checks student scores
//[{stu 1}, {stu2}] array{name: string, score: number}
//api caculates avergae score
//return in json format

//validator middleware
//is it array of{}?
//do objects have name and score?
//else status(400).("body not correct")


import express,{Response, Request} from "express"
import fs from "fs"

const app = express() 
app.use(express.json())

interface Body {
  name: string 
  score: number
}

let students: Body[] = []

const readStudents = fs.readFileSync('./students.json', 'utf-8')
students = JSON.parse(readStudents)




app.get("/students", (req: Request, res: Response) => {
    res.send(students)
})











app.listen(3001, () => {console.log("listening to port 3001")})
export{}