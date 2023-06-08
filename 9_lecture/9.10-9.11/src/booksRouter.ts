import express,{Response, Request} from "express"
import { checkId, checkParams, checkPartialParams, checkIsAdmin, authenticate} from "./middleware"
const router = express.Router()



interface Book {
  id: number;
  name: string;
  author: string;
  read: boolean;
}

let books: Book[] = [{
    "id": 1,
    "name": "book1",
    "author": "bobo",
    "read": true
},
{
    "id": 2,
    "name": "book1",
    "author": "bobo",
    "read": true
}]



//Posts a book
router.post("/", checkIsAdmin,checkParams,(req: Request, res: Response) => {
    const body: Book = req.body
    const bookIdVerifier = books.find((book) => book.id === body.id)
    if(bookIdVerifier){
        res.status(400).send("id exists already ")
    }else{
        if(req.isAdmin){
            books.push(body)
            res.status(201).send("book added")
        }else{
            res.status(401).send("line:40 you need to be admin to do this")
        }
       
    }
})


//gets all books
router.get("/",authenticate,(req: Request, res: Response) => {
      
    res.status(201).send(books)
})

//gets one book by id
router.get("/:id",authenticate, checkId,(req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    const book = books.find(book => book.id === id)
    
    return !book 
        ? res.status(404).send("book id not available- try different id") 
        : res.status(201).send(book)
})


//modifies an existing book
router.put( "/:id",  checkPartialParams, checkIsAdmin, (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    const body: Body = req.body
    const bookExists = books.find((book) => book.id === id)

    if(!bookExists){
        res.status(404).send("book doesnt exist")
    }
    if(req.isAdmin){
        books = books.map(book => {
            if (book.id === id) {
                return { ...book, ...body }
            }
            return book
        })
        res.status(204).send("book modified")
    }else{
        res.status(401).send("line 78: you need to be admin to do this")
    }
  
 
}
)

//Removes a book by id number
router.delete("/:id", checkIsAdmin, (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    const bookExists = books.find(book => book.id === id)
  
    if (!bookExists) {
        res.status(404).send("book doesn't exist")
    }
  
    if(req.isAdmin){
        books = books.filter(book => book.id !== id)
        res.status(204).send()

    }else{
        res.status(401).send("line 95: you need to be admin to delete")
    }
})




export default router