import axios from "axios";
// import { type } from "os";



type Todo = {
  userId :number
  id:number
  title: string
  completed: boolean
  user?: {}
}


interface User {
  id?: number
  name: string
  username: string
  email: string

}

// async function getAllTodos (){
//     const allTodos = await  axios.get('https://jsonplaceholder.typicode.com/todos')

//     return allTodos
// }


// async function ex() {
//   const todo = await getAllTodos()
//   console.log(todo)


// }

// ex();


const todos = async (): Promise<void> => {
    const todos = await fetch('https://jsonplaceholder.typicode.com/todos/')
        .then(
            async (res) => await res.json()
        )
    const users = await fetch('https://jsonplaceholder.typicode.com/users/')
        .then(
            async (res) => await res.json()
        )

    const result = todos.map((todo: Todo) => {
        const currentUser = users.find((user: User) => user.id === todo.userId)
        todo = {
            ...todo,
            user: {
                name: currentUser.name,
                username: currentUser.username,
                email: currentUser.email
            }
        }
        return todo
    })
    console.log(result)
}
todos()
