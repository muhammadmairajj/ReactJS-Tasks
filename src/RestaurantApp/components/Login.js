import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const { email, password } = user;
    const onInputChange = (e) => {
        setUser( {...user, [e.target.name] : e.target.value} );
    }

    const navigate = useNavigate();
    
    const loginUser = () => {
        fetch("http://localhost:3000/login?q="+user.email)
        .then(data => data.json())
        .then((resp) => {
            console.log("resp", resp);
            if(resp.length > 0) {
                localStorage.setItem('login', JSON.stringify(resp));
                // navigate('/list');
            }
            else {
                console.log("Please check email & password");
            }
        })
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();
        // console.log('login', user);
        loginUser();
    }
    

  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={onSubmitHandler}>
            <label htmlFor="">Email: &nbsp;</label>
            <input type="text" name='email' value={email}
            onChange={onInputChange} placeholder='Enter Name' />
            <br /><br />
            <label htmlFor="">Password: &nbsp;</label>
            <input type="password" name='password' value={password}
            onChange={onInputChange} placeholder='Enter Password' />
            <br /><br />
            <input type="submit" value="Login" />
        </form>
    </div>
  )
}

export default Login