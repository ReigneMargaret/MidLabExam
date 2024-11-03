import React from "react";
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

function Tables({ books, onDeleteBook }) {
  return (
    <div>
      <div className="mb-3">
        <Link to="/add-book">
          <Button variant="primary">Add Book</Button>
        </Link>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Genre</th>
            <th>Published Year</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.length > 0 ? (
            books.map((book) => (
              <tr key={book.id}>
                <td>{book.id}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.genre}</td>
                <td>{book.publishedYear}</td>
                <td>{book.description}</td>
                <td>
                  <Link to={`/view-book/${book.id}`}>
                    <Button variant="info" className="me-2">View</Button>
                  </Link>
                  <Link to={`/edit-book/${book.id}`}>
                    <Button variant="warning" className="me-2">Edit</Button>
                  </Link>
                  <Button variant="danger" onClick={() => onDeleteBook(book.id)}>Delete</Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center">No books available</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
}

export default Tables;
