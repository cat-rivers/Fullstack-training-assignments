import fs from "fs"
import { re } from "mathjs"
import { stringify } from "querystring"

// Reading a file
const read = fs.readFileSync('./forecast_data.json', 'utf-8')

let weather = JSON.parse(read)

weather.temperature = 30

const jsonString = JSON.stringify(weather)

const write = fs.writeFileSync('./forecast_data.json', jsonString, 'utf-8')


// Writing a file
// fs.writeFileSync('./namelist.txt', names, 'utf-8')
