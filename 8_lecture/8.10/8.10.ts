//API checks student scores
//[{stu 1}, {stu2}] array{name: string, score: number}
//api caculates avergae score
//return in json format




import express,{Response, Request} from "express"
import { checkBody } from "./middleware"
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


app.post("/scores", checkBody, (req: Request, res: Response) => {
    const body: Body = req.body
    students.push(body)
    res.status(201).send(students)
})

app.get("/scores", (req: Request, res: Response) => {
    const body = req.body
    const totalScore = students.reduce((sum, b) => sum + b.score, 0)
    const avg = totalScore / students.length - 1
    const highestScore = students.reduce((prev, curr) => prev.score < curr.score? curr: prev)
    const percentageOverAvg = students.filter((student) => student.score >= avg).reduce((sum, b) => sum + b.score, 0)/totalScore*100
   
    const result = {
        "averageScore": avg,
        "Highest Score": highestScore,
        "percentage above avg": percentageOverAvg
    }
    
    res.status(201).send(JSON.stringify(result))
})

app.use(checkBody)
app.listen(3001, () => {console.log("listening to port 3001")})


export{}