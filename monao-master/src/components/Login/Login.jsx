import { useState } from 'react';
import './Login.css'
import {useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername ] = useState('');
  const [password, setPassword  ] = useState('');
  

  const handleLogin = async (event) => {
    event.preventDefault();

    const formData = {
      username,
      password,
    };  

    try {
        // const dataToSend = {
        //    ...formData,
        // };

        const response = await fetch('http://127.0.0.1:8000/auth/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (response.ok) {
            alert('Logged in Successfully');
            console.log('Token:', data.token);
            navigate('/Dashboard');
        } else {
            alert( data.errors?.non_field_errors[0] || 'Login failed');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while logging in');
    }
  };
    
      return (
        <div className='man'>
        <div className='con'>
          <form method='POST' onSubmit={handleLogin}>
                    <h1>
                        Login
                    </h1>
    
                    <div className="inbox">
                      <p> <label htmlFor="text">Username</label></p> 
                        <input type="text" id="uname" name="username"
                         onChange={ (e) => setUsername(e.target.value)} required/>
                    </div>
    
                    <div className="inbox">
                        <p><label htmlFor="password">Password</label></p>
                        <input type="password" id="pwd" name="password"
                         onChange= {(e) => setPassword(e.target.value)} required/>
                    </div>
    
                    <div className="rem-forg">
                       <p><span>Forgot Password</span></p> 
                    </div>
                    <button type="submit">
                        Log In
                    </button>
    
                </form>
        </div>
        </div>
      )
};

export default Login
