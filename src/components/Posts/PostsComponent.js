import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { FaHeart, FaStar } from 'react-icons/fa'; 
import './PostsComponent.css';

const PostsComponent = ({ posts }) => {
  const [likes, setLikes] = useState(posts.map(post => post.likes));

  const handleLike = (index) => {
    const newLikes = [...likes]; 
    newLikes[index] += 1; 
    setLikes(newLikes); 
  };

  return (
    <div className="wrapper-posts">
      {posts.map((post, index) => (
        <Card className="mb-3" key={index}>
          <div className="d-flex"> 
          <Card.Img 
                variant="top" 
                src="https://via.placeholder.com/150"
                alt="Card image cap" 
                className="card-img"
            />
            <Card.Body className="post-content">
              <div>
                <Card.Title className="post-title">
                    {post.title}
                    <FaStar className="me-1 star-post" /> 
                    </Card.Title>
                
                <Card.Text>{post.content}</Card.Text>
                <Card.Text className="timing">
                  <small className="text-muted">{post.updated}</small>
                </Card.Text>
              </div>
              <span 
                className="like-button" 
                onClick={() => handleLike(index)} 
                style={{ cursor: 'pointer' }}>
                {likes[index]}
                <FaHeart className="heart-icon" />
              </span>
            </Card.Body>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default PostsComponent;
