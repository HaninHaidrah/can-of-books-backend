'use strict';

const bookModel=require('../models/book.model')

const getbook=(request,respond)=>{

    bookModel.find((error,bookdata)=>{
        respond.json(bookdata)

    })
}


module.exports={
    getbook
}