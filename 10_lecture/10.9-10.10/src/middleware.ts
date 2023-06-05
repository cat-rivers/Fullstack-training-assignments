import {Request, Response, NextFunction} from 'express'
import jwt from "jsonwebtoken"

export const endPointNotFound = (req: Request, res: Response) => {
  res.status(404).send({ error: "oops...wrong place maybe?" })

}


//Checks that parameters are in body
export const checkParams = (req: Request, res: Response, next: NextFunction) => {
const {user, note, id} = req.body
if(!user || !id || !note ){
   return res.status(400).send('Error: Missing or invalid parameters')
}


next()


}


export const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const auth = req.get('Authorization')
  console.log("step 1")
    if (!auth?.startsWith('Bearer ')) {
      console.log("step 2")
        return res.status(401).send('Invalid token doesnt start with bearer')
    }
    console.log("step3")
    const token = auth.substring(7)
    const secret = "poop"
    try {
        const decodedToken = jwt.verify(token, secret)
        console.log("step 4")
        console.log(decodedToken)
        console.log(token)
        next()
      } catch (error) {
        console.log("step 6")
        return res.status(401).send('Invalid token')
    }

}