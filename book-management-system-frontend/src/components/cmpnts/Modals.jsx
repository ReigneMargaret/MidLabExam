import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Modals({ showModal, handleClose }) {
  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Manage Book</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <form>
          <div className="mb-3">
            <label htmlFor="bookId" className="form-label">Book ID</label>
            <input type="text" className="form-control" id="bookId" placeholder="Enter book ID" />
          </div>
          <div className="mb-3">
            <label htmlFor="bookTitle" className="form-label">Book Title</label>
            <input type="text" className="form-control" id="bookTitle" placeholder="Enter book title" />
          </div>
          <div className="mb-3">
            <label htmlFor="authorName" className="form-label">Author Name</label>
            <input type="text" className="form-control" id="authorName" placeholder="Enter author name" />
          </div>
          <div className="mb-3">
            <label htmlFor="bookDescription" className="form-label">Description</label>
            <textarea className="form-control" id="bookDescription" rows="3" placeholder="Enter book description"></textarea>
          </div>
        </form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Close</Button>
        <Button variant="primary" onClick={() => { /* Add logic to save changes */ }}>Save Changes</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Modals;

