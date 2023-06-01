
import express, {Request, Response} from 'express'
import argon from 'argon2'
import 'dotenv/config'
const router = express.Router()
import jwt from "jsonwebtoken"


interface UserInfo {
  username: string
  password: string
}



export let users: UserInfo[] = []

router.post('/register', (req: Request, res: Response)=> {
  const {username, password} = req.body
  if(!username || !password){
      res.status(404).send("missing paramteres")
  }
  argon.hash(password)
  .then((result: string) => users.push({"username": username, "password": result}))
  
  const token = jwt.sign({username: username}, "poopihead", {expiresIn: "25m"})
  res.status(200).send(token)
})




router.post(
  "/login",
  async (req: Request, res: Response) => {
    const { username, password } = req.body;
    if (!username || !password) {
      res.status(404).send("missing paramteres");
    }
    const user = users.find(
      (user) => user.username === username
    );
    if (user) {
      const verified = await argon.verify(
        user.password,
        password
      );
      const token = jwt.sign({username: username}, "poopihead", {expiresIn: "25m"})

      verified
        ? res.status(200).send(token)
        : res.status(401).send("unauthorized");
    } else {
      res.status(401).send("unauthorized from login");
    }
  }
);



router.post(
  "/admin",
  async (req: Request, res: Response) => {
    const { username, password } = req.body;

    if (!username || !password) {
      res.status(404).send("missing paramteres");
    }
    if (process.env.ADMIN_USER === username) {
      const verified = await argon.verify(
        process.env.ADMIN_PSW as string,
        password
      );
      const token = jwt.sign({username: username}, "poopihead", {expiresIn: "25m"})

      verified
        ? res.status(200).send(console.log(token))
        : res.status(401).send("unauthorized");
    } else {
      res.status(401).send("why?");
    }
  }
);

//! admin psw: argon.hash("poop").then((res) => console.log(res))

export default router