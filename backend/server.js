const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const PORT = 4000

app.use(cors())
app.use(bodyParser.json())

monogoose.connect('mongodb://127.0.0.1:27017/todos', {
    useNewUrlParser: true
});

const connection = monogoose.connection;


app.listen(PORT, function(){
    console.log("Server is running on PORT:" + PORT);
})