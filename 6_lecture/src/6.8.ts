import axios from "axios";



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




const todos = async (): Promise<void> => {
    const todos = await axios.get('https://jsonplaceholder.typicode.com/todos/')
        .then(
            async (res) => await res.data
        )
    const users = await axios.get('https://jsonplaceholder.typicode.com/users/')
        .then(
            async (res) => await res.data
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
