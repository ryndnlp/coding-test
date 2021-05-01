import './Login.css';
import Navbar from '../../components/Navbar/Navbar';
import ActionButton from '../../components/ActionButton/ActionButton';
import { useState } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import DynamicTitle from '../../components/DynamicTitle/DynamicTitle';

const Login = () => {
  const history = useHistory();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const body = {
      username,
      password
    }
    console.log(body)
    axios.post('/login', body).then(resp => resp.data)
    .then(data => {
      localStorage.setItem('token', data.token);
      history.push('/result');
    })
    .catch(err => {
      alert('Wrong credential');
      console.log(err)
    })
  }

  const handleUsernameChange = (e) => {
    setUsername(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }
  return(
    <>
      <DynamicTitle title="Login" />
      <Navbar />
      <div className="login">
        <form className="login__form">
          <div className="login__input-container">
            <label htmlFor="" className="login__label">Username</label>
            <input type="text" className="login__input" onChange={handleUsernameChange} />
          </div>
          <div className="login__input-container">
            <label htmlFor="" className="login__label">Password</label>
            <input type="password" className="login__input" onChange={handlePasswordChange} />
          </div>
          <div className="login__input-container">
            <ActionButton text="Login" onClick={handleLogin} />
          </div>
        </form>
      </div>
    </>
  )
}

export default Login;