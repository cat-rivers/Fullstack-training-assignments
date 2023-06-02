import {Request, Response, NextFunction} from 'express'


export const endPointNotFound = (req: Request, res: Response) => {
  res.status(404).send({ error: "oops...wrong place maybe?" });

};


//Checks that 
export const checkParams = (req: Request, res: Response, next: NextFunction) => {
const {user, note, id, isPublic} = req.body
if(!user || !id || !note){
  return res.status(400).send('Error: Missing or invalid parameters')
}
if(!isPublic){
  req.body.isPublic = true
}
next()

}