import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BookList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetchBooks();
    }, []);

    const fetchBooks = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/books');
            setBooks(response.data);
        } catch (error) {
            console.error("Error fetching books", error);
        }
    };

    const deleteBook = async (id) => {
        try {
            await axios.delete(`http://localhost:8000/api/books/${id}`);
            fetchBooks(); // Refresh the list
        } catch (error) {
            console.error("Error deleting book", error);
        }
    };

    return (
        <div>
            <h2>Book List</h2>
            <ul>
                {books.map(book => (
                    <li key={book.id}>
                        {book.title} by {book.author}
                        <Link to={`/view-book/${book.id}`}>View</Link>
                        <Link to={`/edit-book/${book.id}`}>Edit</Link>
                        <button onClick={() => deleteBook(book.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookList;
