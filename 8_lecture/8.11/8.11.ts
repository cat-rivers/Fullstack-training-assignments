
// GET /api/v1/books → Returns a list of all the books

// GET /api/v1/books/{id} → Returns a book with a corresponding ID.

// POST /api/v1/books → Creates a new book.

// PUT /api/v1/books/{id} → Modifies an existing book

// DELETE /api/v1/books/{id} → Removes a book with a corresponding id

// Every book should have four parameters



import express,{Response, Request} from "express"
import { checkId, checkParams } from "./middleware";

const app = express() 
app.use(express.json())

interface Book {
  id: number;
  name: string;
  author: number;
  read: boolean;
}

let books: Book[] = []




app.post("/api/v1/book", checkParams, (req: Request, res: Response) => {
    const body: Book = req.body
    books.push(body)
    res.status(201).send(books)
})

app.get("/api/v1/books", (req: Request, res: Response) => {
      
    res.status(201).send(books)
})

app.get("/api/v1/books/{id}", checkId,(req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const book = books.find(book => book.id === id);
  
    return !book 
      ? res.status(404).send("you fucked up") 
      : res.status(201).send(book);
})

app.use(checkParams)
app.use(checkId)
app.listen(3001, () => {console.log("listening to port 3001")})


export{}