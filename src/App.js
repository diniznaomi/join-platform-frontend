import './App.css';
import NavBar from './components/Header/NavbarComponent';
import HeroOne from './components/HeroOne/HeroOneComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './components/Profile/ProfileComponent';
import Posts from './components/Posts/PostsComponent';
import React from 'react';
import NewPost from './components/Posts/NewPostComponent';
import ReservationComponent from './components/Reservation/ReservationComponent';

function App() {
  const [posts, setPosts] = React.useState([
    {
      title: 'Ana Silva received a recognition',
      content: '"Your support was instrumental; I truly appreciate your assistance."',
      updated: 'from: Maria Santos',
      likes: 20,
    },
    {
      title: 'Carlos Oliveira received a recognition',
      content: '"I miss working with you. Those were great times! Best regards."',
      updated: 'from: Fernanda Costa',
      likes: 31,
    },
    {
      title: 'Lucas Pereira received a recognition',
      content: '"Thank you for your invaluable insights; they helped me immensely."',
      updated: 'from: Juliana Almeida',
      likes: 15,
    },
    {
      title: 'Roberto Lima received a recognition',
      content: '"Your expertise was essential; I couldn’t have done this without you."',
      updated: 'from: Sara Mendes',
      likes: 22,
    },
    {
      title: 'Fernanda Rocha received a recognition',
      content: '"Thanks for being there when I needed help; your support means a lot."',
      updated: 'from: Tiago Martins',
      likes: 15,
    },
  ]);

  const handleAddPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div>
      <HeroOne />
      <NavBar />
      <div className="wrapper">
      <div className="background-overlay" />
        <div className="leftSecction">
          <Profile />
          <ReservationComponent />
        </div>
        <div className="secction">
          <div className="rigthSecction">
            <NewPost onAddPost={handleAddPost} /> 
            <Posts posts={posts} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
