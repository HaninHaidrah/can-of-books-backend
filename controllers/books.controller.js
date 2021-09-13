'use strict';

const bookModel=require('../models/book.model')

const getbook=(request,respond)=>{

    bookModel.find((error,bookdata)=>{
        respond.json(bookdata)

    })
}

const createBook = (request, response) => {

    const { title, description, email, status } = request.body;
  
  
    const newbook = new bookModel({
        title, description, email, status
    });
  
    newbook.save();
  
    response.json(newbook);
  
  }
  
  const deleteBook = (request, response) => {
 
    const bookId = request.params.Book_id;
  
    bookModel.deleteOne({ _id: bookId }, (error, deletedData) => {
      if(error){alert(`you have error in backend ${error}`)}
      else {
      response.json(deletedData);}
    });
  
  }
  
  module.exports = {
    getbook,
    createBook,
    deleteBook
  }