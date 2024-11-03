import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BookDetails = () => {
    const { id } = useParams();
    const [book, setBook] = useState(null);

    useEffect(() => {
        fetchBook();
    }, []);

    const fetchBook = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/api/books/${id}`);
            setBook(response.data);
        } catch (error) {
            console.error("Error fetching book details", error);
        }
    };

    if (!book) return <p>Loading...</p>;

    return (
        <div>
            <h2>{book.title}</h2>
            <p>Author: {book.author}</p>
            <p>Published Year: {book.published_year}</p>
            <p>Genre: {book.genre}</p>
        </div>
    );
};

export default BookDetails;
