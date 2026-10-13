require('dotenv').config() //ettől létezik a process.env.ENV_VAR_...

const express = require('express');
const cors = require('cors');
const app = express()

app.use(cors())

const PORT = 8080

app.get('/', (req, res)=> res.status(200).json("Hello world!"))
//https://api.api-ninjas.com/v1/sudokugenerate?difficulty=medium&width=3&height=3
app.get('/sudoku', async (req, res)=>{
    const ninjaApiKey = process.env?.NINJA_API_KEY || ''
    //TODO-req.body-diff, width, height
    const difficulty = "medium"
    const width = 3
    const height = 3
    const json = await fetch(`https://api.api-ninjas.com/v1/sudokugenerate?difficulty=${difficulty}&width=${width}&height=${height}`, {
        method: "GET",
        headers: {
            "X-Api-Key": ninjaApiKey
        }
    })
    console.log("json: ",json);
    if (json.ok) {
        const data = await json.json()
        console.log("data: ",data);
        return res.status(200).json(data)
    } else {
        console.warn(json);
        return res.status(400).json(json)
    }
    
})

app.listen(PORT, (error)=>{
    if (error) {
        console.warn(error);
    } else {
        console.log("Express backend server is running on port: ", PORT);
    }
})
