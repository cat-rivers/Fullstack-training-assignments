import axios from 'axios'

interface Movie{
    Title: string
    Year: number
   

}


async function findMovie(title: string, year: number | string = " ") {
    const response = await axios.get(
        `http://www.omdbapi.com/?apikey=c3a0092f&t=${title}&y=${year}`
    )
    const typedresponse: Movie = response.data
    console.log(typedresponse)
    console.log(typedresponse.Year)
    console.log(typedresponse.Title)
    // console.log(Object.keys(typedresponse))   
}

findMovie("jaws")

// .then((response) => console.log(response.data))
// .catch(error => console.log(error))