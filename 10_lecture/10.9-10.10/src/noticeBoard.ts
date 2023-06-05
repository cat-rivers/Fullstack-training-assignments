import express, {Response, Request} from "express"
import { checkParams, authenticate } from "./middleware"

const router = express.Router()


interface Note {
  user: string,
  note: string,
  id: number,

}

export let notesDB: Note[] = [
  {
    user: "cat",
    note: "you are a cabbage",
    id: 1,
  },
  {
    user: "cami",
    note: "you are a tomato",
    id: 2,
  }
]

export let secretNotesDB: Note[] = [ 
  {
     "user": "cat",
     "note": "you are a cabbage",
     "id": 5
    
    
    
   }]


//create one new post
router.post("/new", checkParams,( req: Request, res:Response) => {
  const body: Note = req.body
  let post = notesDB.find((post) => post.id === body.id)
  if(post){
    res.status(401).send("id already exists-cannot create new post")
  }else{
    notesDB.push(body)
    console.log(body)
    res.status(200).send(body)
  }

})


//returns all posts 
router.get("/", (req: Request,res: Response) => {
  res.send(notesDB)
})
//ger all secret posts
router.get("/secret",authenticate,( req: Request, res:Response) => {
  console.log("hello")
  res.status(200).send(secretNotesDB)

})

//get one post by id number
router.get("/:id",(req: Request,res: Response) => {
  let post = notesDB.find((post) => post.id === parseInt(req.params.id) )
  
  res.status(200).send(post)
} )


//delete one post by id number
router.delete("/:id", (req: Request, res: Response) => {
  const newArr = notesDB.filter((note) => note.id !== parseInt(req.params.id))
  notesDB = newArr
  res.status(200).send("post deleted")
})



//Secure-Secret endpoints




//create a secret note
router.post("/new/secret", checkParams,authenticate,( req: Request, res:Response) => {
  let post = secretNotesDB.find((post) => post.id === req.body.id)

  if(post){
    res.status(401).send("id already exists-cannot create new post")
  }else{
    secretNotesDB.push(req.body)
    console.log(secretNotesDB)
    res.status(200).send(secretNotesDB)
  }

})






/* There should be endpoits to:
 create
 read
 delete secret notices. 
 To access : username and a password.
send a username and a password either on :
      basic authentication header or 
      request body. 
The endpoint should verify that the credentials are valid, and if so, serve the secret content. Remember that secret information in environment variables.


Create a Dockerfile for the app. Build the app image so that the environment variables are provided to Docker during the build time, resulting in a container that can be run without giving any environment variable information.
Run your application in a container. Make sure the secret is served if and only if the user provides correct username and password.*/


export default router