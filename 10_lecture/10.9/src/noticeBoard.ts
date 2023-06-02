import express, {Response, Request} from "express"
import 'dotenv/config'
import { checkParams } from "./middleware"

const router = express.Router()


interface Note {
  user: string,
  note: string,
  id: number,
  isPublic: boolean

}

export let publicNotes: Note[] = [
  {
    user: "cat",
    note: "you are a cabbage",
    id: 1,
    isPublic: true,
  },
  {
    user: "cami",
    note: "you are a tomato",
    id: 2,
    isPublic: true,
  }
];


//create one new post
router.post("/new", checkParams,( req: Request, res:Response) => {
  let post = publicNotes.find((post) => post.id === req.body.id)

  if(post){
    res.status(401).send("id already exists-cannot create new post")
  }else{
    publicNotes.push(req.body)
    res.status(200).send(req.body)
  }

})


//returns all posts 
router.get("/", (req: Request,res: Response) => {
  
  res.send(publicNotes)
})

//get one post by id number
router.get("/:id",(req: Request,res: Response) => {
  let post = publicNotes.find((post) => post.id === parseInt(req.params.id))
  
  res.status(200).send(post)
} )


//delete one post by id number
router.delete("/:id", (req: Request, res: Response) => {
  const newArr = publicNotes.filter((note) => note.id !== parseInt(req.params.id))
  publicNotes = newArr
  res.status(200).send("post deleted")
})


export default router