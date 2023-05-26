
import express, {Request, Response, NextFunction} from 'express'

export const middlewear = (req: Request, res: Response, next: NextFunction) => {
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
    if ( !name && !email)  {
        return res.status(400).send('Error: Missing Email and Name')
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