const express = require('express');

const {connectDB } = require('./connect');

const urlRoute = require('./routes/url.routes');

const app = express();

connectDB('mongodb://localhost:27017/short-url')
.then(() => {
    console.log("connected to db")
});

app.use(express.json());

app.use('/url', urlRoute);



app.listen(8000,() =>{
    console.log("server is started!");
})


