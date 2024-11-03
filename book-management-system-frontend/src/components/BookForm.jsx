import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const BookForm = ({ isEdit }) => {
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        published_year: '',
        genre: '',
        description: '',
    });

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (isEdit) {
            fetchBook();
        }
    }, [isEdit]);

    const fetchBook = async () => {
        const response = await axios.get(`http://localhost:8000/api/books/${id}`);
        setFormData(response.data);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isEdit) {
                await axios.put(`http://localhost:8000/api/books/${id}`, formData);
            } else {
                await axios.post('http://localhost:8000/api/books', formData);
            }
            navigate('/');
        } catch (error) {
            console.error("Error saving book", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>{isEdit ? 'Edit Book' : 'Add Book'}</h2>
            <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} required />
            <input type="text" name="author" placeholder="Author" value={formData.author} onChange={handleChange} required />
            <input type="number" name="published_year" placeholder="Published Year" value={formData.published_year} onChange={handleChange} required />
            <input type="text" name="genre" placeholder="Genre" value={formData.genre} onChange={handleChange} required />
            <button type="submit">{isEdit ? 'Update' : 'Add'}</button>
        </form>
    );
};

export default BookForm;
