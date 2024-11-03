import React, { useState } from "react";

function AddBook({ onAddBook }) {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [genre, setGenre] = useState("");
    const [publishedYear, setPublishedYear] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBook = { 
            id: Date.now(), 
            title, 
            author, 
            genre, 
            publishedYear, 
            description 
        };
        onAddBook(newBook);
        setTitle("");
        setAuthor("");
        setGenre("");
        setPublishedYear("");
        setDescription("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>
            <div>
                <label>Author</label>
                <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
            </div>
            <div>
                <label>Genre</label>
                <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)} required />
            </div>
            <div>
                <label>Published Year</label>
                <input type="text" value={publishedYear} onChange={(e) => setPublishedYear(e.target.value)} required />
            </div>
            <div>
                <label>Description</label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
            </div>
            <button type="submit">Add Book</button>
        </form>
    );
}

export default AddBook;
