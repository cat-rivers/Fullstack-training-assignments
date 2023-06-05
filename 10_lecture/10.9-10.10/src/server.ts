import express , {Response, Request}from "express"
import notes from "./noticeBoard"
import user from "./user"
import { endPointNotFound } from "./middleware"
const server = express()
server.use(express.json())

server.use("/notes",notes)
server.use("/user", user)

server.get('/', (req, res) => {
  res.send('OK')
})


server.use(endPointNotFound)

export default server


