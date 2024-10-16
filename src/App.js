import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import LoginComponent from './components/Login/LoginComponent';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './store/store';
import HomeComponent from './components/Home/HomeComponent';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsAuthenticated(true); 
    }
    setIsLoading(false); 
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true); 
  };

  if (isLoading) {
    return <div></div>; 
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div>
          {isAuthenticated ? (
            <>
              <HomeComponent />
            </>
          ) : (
            <LoginComponent onLogin={handleLogin} />
          )}
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
