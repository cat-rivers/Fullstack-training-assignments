import {Request, Response, NextFunction} from 'express'


export const checkId = (req: Request, res: Response, next: NextFunction) => {
    const { id} = req.params
   
    if(!id || Number.isNaN(parseInt(id))){
      return res.status(400).send("gimme a number u fish :@")
  
    }
    next()
  }

  export const checkParams = (req: Request, res: Response, next: NextFunction) => {
    const { name, id, author, read } = req.body
      if (!id || !name || !author || !read)  {
          return res.status(400).send('Error: Missing or invalid parameters')
      }
      next()
  }