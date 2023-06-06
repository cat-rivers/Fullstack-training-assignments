import express, {Response, Request} from "express"
import 'dotenv/config'


const app = express()
const port = process.env.PORT
app.get("/", (req: Request, res: Response)=> {
res.send("ok ")
})


app.listen(port, () => console.log("port listening :d"))