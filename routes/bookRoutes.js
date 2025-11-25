const express = require("express");
const { createBook, getAllBooks, getBookById, deleteBook, updateBook } = require("../controllers/bookController");

// These are where the routes are created
const router = express.Router();

// Post allows you 
router.post("/", createBook);

router.get("/", getAllBooks)

router.get("/:id", getBookById)

router.delete("/:id", deleteBook)

router.put("/:id", updateBook)

module.exports = router;
