import express, {Request, Response} from 'express'
import argon from 'argon2'
import 'dotenv/config'
const router = express.Router()
import jwt from "jsonwebtoken"


interface UserInfo {
  username: string
  password: string
  isAdmin: boolean
}



export let users: UserInfo[] = [
    {
        username: "catalina",
        password: process.env.ADMIN_PSW as string,
        isAdmin: true,
    },
]

//Register new user
router.post("/register", (req: Request, res: Response) => {
    const { username, password, isAdmin } = req.body
    if (!username || !password) {
        res.status(404).send("missing paramteres")
    }

    if (users.find(el => el.username === username)) {
        return res.status(401).send("line 27: username already exists")
    }

    argon.hash(password).then((result: string) => {
        users.push({ username: username, password: result, isAdmin: false })
    })
    const payload = { isAdmin: isAdmin, username: username }
    const token = jwt.sign(payload, "poopihead", { expiresIn: "25m" })
    res.status(200).send(token)
})

// Login with existing user
router.post("/login", async (req: Request, res: Response) => {
    const { username, password } = req.body
    if (!username || !password) {
        res.status(404).send("missing paramteres")
    }
    const user = users.find(user => user.username === username)
    if (user) {
        const verified = await argon.verify(await user.password, password)
        const payload = { isAdmin: user.isAdmin, username: user.username }
        const token = jwt.sign(payload, "poopihead", { expiresIn: "25m" })

        verified
            ? res.status(200).send(token)
            : res.status(401).send("unauthorized")
    } else {
        res.status(401).send("line 65: username not found")
    }
})

export default router