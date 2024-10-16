import React, { useState } from 'react';
import UserService from '../../Services/UserService';
import './LoginComponent.css';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/userSlice';

const LoginComponent = ({ onLogin }) => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
  
    const handleLogin = async (e) => {
      e.preventDefault();
      setLoading(true);
  
      try {
        const response = await UserService.authentication(email, password);
        const { user, token } = response.data;
  
        localStorage.setItem('authToken', token);
        dispatch(setUser({ user, token }));
        onLogin();
      } catch (error) {
        console.error('Erro de autenticação:', error);
      } finally {
        setLoading(false);
      }
    };

  return (
    <div className="login-container">
        <div className="login-image">
            <section className="login-img">
                <img src={require ("../../assets/shape/dotmr.png") } alt="" className="shapeLogin shapeLogin3" />
                <img src={require ("../../assets/shape/plusgs.png") } alt="" className="shapeLogin shapeLogin4" />
                <img src={require ("../../assets/shape/plusb.png") } alt="" className="shapeLogin shapeLogin5" />
                <img src={require ("../../assets/shape/plusg.png") } alt="" className="shapeLogin shapeLogin6" />
                <img src={require ("../../assets/shape/plusgs.png") } alt="" className="shapeLogin shapeLogin7" />
                <img src={require ("../../assets/shape/plusr.png") } alt="" className="shapeLogin shapeLogin8" />
                <img src={require ("../../assets/shape/sgdot.png") } alt="" className="shapeLogin shapeLogin9" />
                <img src={require ("../../assets/shape/xsrdot.png") } alt="" className="shapeLogin shapeLogin10" />
                <img src={require ("../../assets/shape/sgdot.png") } alt="" className="shapeLogin shapeLogin11" />
                <img src={require ("../../assets/shape/dotmr.png") } alt="" className="shapeLogin shapeLogin13" />
                <img
                    src={require('../../assets/shape/join.png')}
                    className="logo-login"
                    alt="join"
                />
                <h6 className="login-caption">Your collaboration and recognition platform 
                <img
                    src={require('../../assets/shape/verifed-32.png')}
                    className="verifed-img"
                    alt="verifed"
                />
                </h6>
            </section>
        </div>
        <div className="login-form">
        <form onSubmit={handleLogin}>
          <h2>Login</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="login-btn" type="submit" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginComponent;
