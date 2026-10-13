require('dotenv').config() //ettől létezik a process.env.ENV_VAR_...

const express = require('express');
const app = express()

const PORT = 8080

app.get('/', (req, res)=> res.status(200).json("Hello world!"))

app.listen(PORT, (error)=>{
    if (error) {
        console.warn(error);
    } else {
        console.log("Express backend server is running on port: ", PORT);
    }
})
