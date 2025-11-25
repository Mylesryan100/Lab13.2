// Where logic is done here
const Book = require("../models/Book");

//createBook
const createBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(200).json(book);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
//GET all books
const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.send(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// GET book by ID
const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ error: "Book not found" });
    res.json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteBook = async (req, res) => {
  try {
    const removeBook = await Book.findByIdAndDelete(req.params.id);
    res.json(`Removed book: ${removeBook.title}`);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateBook = async (req, res) => {
  try {
      const updatedBook = await Book.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
      )
      if(!updatedBook) return res.status(400).json({error: "Book not found"})
      res.json(updatedBook)

  } catch (error) {
      res.status(400).json({ error: error.message });
  }
}

//Export all created controllers for full functionality
module.exports = { createBook, getAllBooks, getBookById, deleteBook, updateBook };
