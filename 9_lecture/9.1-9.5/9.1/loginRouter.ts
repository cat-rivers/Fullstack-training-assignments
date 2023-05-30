
import express, {Request, Response} from 'express'
import argon from 'argon2'
import 'dotenv/config'
const router = express.Router()


interface UserInfo {
  username: string
  password: string
}


// const password = process.argv[2]
// argon2.hash(password)
//     .then(result => console.log(result))

export let users: UserInfo[] = []

router.post('/', (req: Request, res: Response)=> {
  const {username, password} = req.body
  if(!username || !password){
      res.status(404).send("missing paramteres")
  }
  argon.hash(password)
  .then(result => users.push({"username": username, "password": result}))
  
  res.status(201).send(users)
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
      const passwordInput = password;
      const verified = await argon.verify(
        user.password,
        password
      );

      verified
        ? res.status(204).send()
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

      verified
        ? res.status(204).send(console.log("success"))
        : res.status(401).send("unauthorized");
    } else {
      res.status(401).send("why?");
    }
  }
);

export default router