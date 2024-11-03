import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/pages/Home";
import AddBook from "./components/pages/AddBook";
import EditBook from "./components/pages/EditBook";
import ViewBook from "./components/pages/ViewBook";
import Tables from "./components/cmpnts/Tables";
import Navbar from "./components/cmpnts/Navbar";

function App() {
    const [books, setBooks] = useState([]);

    const addBook = (newBook) => {
        setBooks([...books, newBook]);
    };

    const deleteBook = (id) => {
        setBooks(books.filter(book => book.id !== id));
    };

    return (
        <Router>
            <Navbar />
            <div className="container mt-4">
                <Routes>
                    <Route path="/" element={<Tables books={books} onDeleteBook={deleteBook} />} />
                    <Route path="/add-book" element={<AddBook onAddBook={addBook} />} />
                    <Route path="/edit-book/:id" element={<EditBook books={books} />} />
                    <Route path="/view-book/:id" element={<ViewBook books={books} />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
