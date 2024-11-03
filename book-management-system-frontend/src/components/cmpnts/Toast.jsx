import React from 'react';
import { Toast as BootstrapToast } from 'react-bootstrap'; // Import with an alias

function Toast({ show, onClose, message }) {
  return (
    <BootstrapToast 
      show={show} 
      onClose={onClose} 
      style={{ position: 'absolute', top: '20px', right: '20px' }}
    >
      <BootstrapToast.Header>
        <strong className="me-auto">Book Management System</strong>
        <small></small>
      </BootstrapToast.Header>
      <BootstrapToast.Body>
        {message}
      </BootstrapToast.Body>
    </BootstrapToast>
  );
}

export default Toast;
