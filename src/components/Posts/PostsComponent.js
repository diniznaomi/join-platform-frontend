import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { FaHeart } from 'react-icons/fa'; 
import './PostsComponent.css';
import PostService from '../../Services/PostService';

const PostsComponent = ({posts}) => {
  const [likes, setLikes] = useState(posts.map(post => post.likes));
  const [postsList, setPostsList] = useState(null);
  const companyId = "3";

  const handleLike = (index) => {
    const newLikes = [...likes]; 
    newLikes[index] += 1; 
    setLikes(newLikes); 
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await PostService.getPosts(companyId)
        setPostsList(data.posts);
      } catch (error) {
        throw new Error('Failed to fetch posts data');
      }
    };

    fetchUserData();
  }, [companyId]);

  return (
    <div className="wrapper-posts">
      {postsList?.map((post, index) => (
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
                  {post.recipient.name} received a recognition
                  <img 
                    variant="top" 
                    src={require("../../assets/shape/award-48.png")}
                    alt="gratification" 
                    className="gratification-img-post"
                  />
                </Card.Title>               
                <Card.Text>{post.message}</Card.Text>
                <Card.Text className="timing">
                  <small className="text-muted">from: {post.author.name}</small>
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
