import {Request, Response, NextFunction} from 'express'

// Verifies that id number is valid number input
export const checkId = (req: Request, res: Response, next: NextFunction) => {
    const { id} = req.params
   
    if(!id || Number.isNaN(parseInt(id))){
      return res.status(400).send("gimme a number u fish :@")
    }
    next()
  }

  //Chacks that all aprams are in body when posting new object
  export const checkParams = (req: Request, res: Response, next: NextFunction) => {
    const { name, id, author, read } = req.body
      if (!id || !name || !author || !read)  {
          return res.status(400).send('Error: Missing or invalid parameters')
      }
      next()
  }

  //Checks partial params when modifying object and also doesnt allow id number to be modified
  export const checkPartialParams = (req: Request, res: Response, next: NextFunction) => {
    const { name, id, author, read } = req.body
     
      if ( id )  {
        return res.status(400).send('Error: Id cannot be updated')
    }
    if (!name || !author || !read){
      return res.status(400).send('missing one or more parameters')
    }
      next()
  }

  // Sends error when endpoint is not found
  export const endPointNotFound = (req: Request, res: Response) => {
    res.status(404).send({ error: "oops...wrong place maybe?" });
  
  };


  //Logs req information every http request
  export const logger = (req: Request, res: Response, next: NextFunction) => {
    res.on("finish", function() {
      const log = {"method": req.method, "URI": decodeURI(req.url), "Satus Code" : res.statusCode, "StatusMessage": res.statusMessage, "timeStamp": new Date,};
      console.log(log)
    });
    next();
  };