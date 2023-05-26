
import  {Request, Response, NextFunction} from 'express'
import { type } from 'os'
import { isArray } from 'util'

export const endPointNotFound = (req: Request, res: Response) => {
    res.status(404).send({ error: "oops...wrong place maybe?" })

}



export const checkBody = (req: Request, res: Response, next: NextFunction) => {
    
    const{name, score} = req.body
    if (!name || !score)  {
        return res.status(400).send('Input is not valid: Missing name or score')
    }
    next()
}