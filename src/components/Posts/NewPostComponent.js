import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import './NewPostComponent.css';

const NewPostComponent = ({ onAddPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      onAddPost({ title, content, updated: 'just now', likes: 0 });
      setTitle('');
      setContent('');
    }
  };

  return (
    <div className="new-post">
      <h5>Appreciate someone by sending a recognition message</h5>
      <Form className="form" onSubmit={handleSubmit}>
        <Form.Group controlId="formTitle" className="name">
          <Form.Control
            type="text"
            placeholder="to"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formContent" className="message-box">
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Message..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </Form.Group>
        <div className="text-end btn-content-new-post">
          <Button type="submit" className="btn-send-new-post">
            Send
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default NewPostComponent;
