const express = require('express');
const app = express()

const PORT = 8080

app.listen(PORT, (error)=>{
    if (error) {
        console.warn(error);
    } else {
        console.log("Express backend server is running on port: ", PORT);
    }
})
