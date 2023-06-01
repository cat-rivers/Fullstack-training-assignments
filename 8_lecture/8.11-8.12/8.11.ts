import express,{Response, Request} from "express"
import { checkId, checkParams, checkPartialParams , endPointNotFound, logger} from "./middleware";
import helmet from 'helmet'

const app = express() 
app.use(express.json())
app.use(logger)
app.use(helmet())



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
app.post("/api/v1/books", checkParams,(req: Request, res: Response) => {
    const body: Book = req.body
    books.push(body)
    res.status(201).send("book added")
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
    ? res.status(404).send("book id not available- try different id") 
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

//Removes a book by id number
app.delete("/api/v1/books/:id",  (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const bookExists = books.find(book => book.id === id);

  if (!bookExists) {
    res.status(404).send("book doesn't exist");
  }

  books = books.filter(book => book.id !== id);
  res.status(204).send()
})

app.use(endPointNotFound)
app.listen(3001, () => {console.log("listening to port 3001")})


export{}