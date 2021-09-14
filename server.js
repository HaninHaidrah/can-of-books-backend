
'use strict'

const express=require('express');
const app=express()
const mongoose = require('mongoose');
require('dotenv').config();
const cors=require('cors');

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;

mongoose.connect(`${MONGO_URL}`);

const bookSeed = require('./helpers/bookSeed.helpers');
// bookSeed();

const {getbook, createBook, deleteBook,updateBook}=require('./controllers/books.controller');
app.get('/books',getbook)

app.post('/books', createBook);
app.delete('/books/:Book_id', deleteBook);
app.put('/books/:Book_id',updateBook)

app.listen(PORT,()=>{
 console.log(`server here${PORT}`)
}
)

