
import express, {Request, Response, NextFunction,ErrorRequestHandler} from 'express'

export const middlewear = (req: Request, res: Response, next: NextFunction) => {
  const reqTime = new Date();
  const method = req.method;
  const url = req.url;
  console.log({ requestTime: reqTime, method: method, requestUrl: url });
  next();
};


// export const errorHandling: ErrorRequestHandler = (error: any,req: Request, res: Response, next: NextFunction ) => {
//   const err = error.message
//   console.log(err)
//   next()
// }

export const endPointNotFound = (req: Request, res: Response) => {
  res.status(404).send({ error: "oops...wrong place maybe?" });

};