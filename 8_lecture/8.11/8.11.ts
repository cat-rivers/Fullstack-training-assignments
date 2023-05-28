
// PUT /api/v1/books/{id} → Modifies an existing book

// DELETE /api/v1/books/{id} → Removes a book with a corresponding id

// Every book should have four parameters



import express,{Response, Request} from "express"
import { checkId, checkParams, checkPartialParams } from "./middleware";

const app = express() 
app.use(express.json())

interface Book {
  id: number;
  name: string;
  author: number;
  read: boolean;
}

let books: Book[] = []



//Posts a book
app.post("/api/v1/books", checkParams,(req: Request, res: Response) => {
    const body: Book = req.body
    books.push(body)
    res.status(201).send(books)
})


//gets all books
app.get("/api/v1/books", (req: Request, res: Response) => {
      
    res.status(201).send(books)
})

//gets one book by id
app.get("/api/v1/books/:id", checkId,(req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const book = books.find(book => book.id === id);
    
    return !book 
    ? res.status(404).send("you fucked up") 
    : res.status(201).send(book);
})


//modifies an existing book
app.put( "/api/v1/books/:id",  checkPartialParams,  (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const body: Body = req.body;
    const bookExists = books.find((book) => book.id === id)

    if(!bookExists){
      res.status(404).send("book doesnt exist")
    }

    books = books.map(book => {
      if (book.id === id) {
        return { ...book, ...body };
      }
      return book;
    });
    res.status(204).send("book modified");
 
  }
);

app.use(checkParams)
app.use(checkId)
app.listen(3001, () => {console.log("listening to port 3001")})


export{}