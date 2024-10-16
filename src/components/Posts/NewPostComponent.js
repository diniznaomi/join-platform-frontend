import React, { useState } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import './NewPostComponent.css';
import PostService from '../../Services/PostService';

const NewPostComponent = () => {
  const [to, setTo] = useState('');  
  const [content, setContent] = useState('');  
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const post = {
      message: content,
      to_user_email: to
    };

    setLoading(true);
    await createPost(post); 
    setLoading(false);
    setTo('');
    setContent('');

    setLoading(false);
  };

  const createPost = async (post) => {
    try {
      return await PostService.createPost(post);
    } catch (error) {
      console.error('Error creating post:', error);
      throw error;
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
            value={to}
            onChange={(e) => setTo(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formContent" className="message-box">
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Message..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </Form.Group>
        <div className="text-end btn-content-new-post">
          <Button type="submit" className="btn-send-new-post" disabled={loading}>
            {loading ? (
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
            ) : 'Send'}
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default NewPostComponent;
