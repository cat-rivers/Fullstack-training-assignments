import fs from "fs"



const read = fs.readFileSync('./forecast_data.json', 'utf-8')

let weather = JSON.parse(read)

weather.temperature = 30

const jsonString = JSON.stringify(weather)

fs.writeFileSync('./forecast_data.json', jsonString, 'utf-8')


