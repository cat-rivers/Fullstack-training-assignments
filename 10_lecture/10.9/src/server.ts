import express , {Response, Request}from "express"
import notes from "./noticeBoard"
import { endPointNotFound } from "./middleware";
const server = express()
server.use(express.json());

server.use("/notes",notes)

server.get('/', (req, res) => {
  res.send('OK')
})


server.use(endPointNotFound)

export default server


