
import {Request, Response, NextFunction} from 'express'
import jwt from 'jsonwebtoken';
import 'dotenv/config'


interface CustomReq extends Request {
  username?: any
}

export const logger = (req: Request, res: Response, next: NextFunction) => {
  const reqTime = new Date();
  const method = req.method;
  const url = req.url;
  console.log({ requestTime: reqTime, method: method, requestUrl: url }, req.body);
  next();
};


export const endPointNotFound = (req: Request, res: Response) => {
  res.status(404).send({ error: "oops...wrong place maybe?" });

};


export const checkParams = (req: Request, res: Response, next: NextFunction) => {
  const { name, id, email } = req.body
    if (!id || !name || !email)  {
        return res.status(400).send('Error: Missing or invalid parameters')
    }
    next()
}

export const checkPartialParams = (req: Request, res: Response, next: NextFunction) => {
  const { name, id, email } = req.body
    if ( !name && !email )  {
        return res.status(400).send('Error: Missing Email and Name')
    }
    if ( id )  {
      return res.status(400).send('Error: Id cannot be updated')
  }
    next()
}

export const checkId = (req: Request, res: Response, next: NextFunction) => {
  const { id} = req.params
 
  if(!id || Number.isNaN(parseInt(id))){
    return res.status(400).send("gimme a number u fish")

  }
  next()
}



export const authenticate = (req: CustomReq, res: Response, next: NextFunction) => {
  const auth = req.get('Authorization')
    if (!auth?.startsWith('Bearer ')) {
        return res.status(401).send('Invalid token doesnt start with bearer')
    }
    const token = auth.substring(7)
    const secret = "poopihead"
    try {
        const decodedToken = jwt.verify(token, secret)
        req.username = decodedToken
        next()
    } catch (error) {
        return res.status(401).send('Invalid token')
    }

}



//! This dont work yet
 export const adminAuth = (req: CustomReq, res: Response, next: NextFunction) => {
  const auth = req.get('Authorization')
    if (!auth?.startsWith('Bearer ')) {
        return res.status(401).send('Invalid token- doesnt start with bearer')
    }
    const token = auth.substring(7)
    console.log(token)
    const secret = process.env.SECRET as string
    try {
        const decodedToken = jwt.verify(token, secret)
        console.log(decodedToken)
        req.username = decodedToken
        next()
    } catch (error) {
        return res.status(401).send('Invalid token- not an admin')
    }

}