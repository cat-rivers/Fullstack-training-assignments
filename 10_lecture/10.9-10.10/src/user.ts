import express, {Response, Request} from "express"
import jwt from "jsonwebtoken"
import argon from "argon2"
import { authenticate } from "./middleware"


const router = express.Router()

interface User {
  username: string
  password: string
}

let users: User[] = [
  {
    username: "cat",
    password: "poop1",
  },
]

router.post("/register", (req: Request, res: Response) => {
  const {username, password} = req.body
  if(!username || !password){
      res.status(404).send("missing paramteres-Username or Password missing")
  }
  argon.hash(password)
  .then((result: string) => users.push({"username": username, "password": result}))
  
  const token = jwt.sign({username: username, isLogged: true}, "poop", {expiresIn: "1h"})
  res.status(200).send(token)
})



router.post("/login",
async (req: Request, res: Response) => {
  const { username, password } = req.body
  if (!username || !password) {
    res.status(404).send("from /login: missing paramteres")
  }
  const user = users.find(
    (user) => user.username === username
  )
  if (user) {
    const verified = await argon.verify(
      user.password,
      password
    )
    const token = jwt.sign({username: username, isLogged: true}, "poop", {expiresIn: "25m"})
   
  
    verified
      ? res.status(200).send(token)
      : res.status(401).send("no token - unverified")
  } else {
    res.status(401).send("unauthorized from login")
  }
}
)



export default router