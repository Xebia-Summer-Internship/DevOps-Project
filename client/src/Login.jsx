// Page for Login Page.
import React from 'react';
import Nav from './Nav';
import './Login.css';
import { Link } from 'react-router-dom';

function Login () {
    return (
        <>
            <Nav />
            <br /> <br />
            <div className='login'>
                <h1 className='form-heading'>Login</h1>     
                
                <input type = 'email' placeholder="Enter your email" name='email'  id="email1"></input><br /><br/>
                <input type = 'text' placeholder="Enter your Password" name='password'  id="password1"></input> <br /> 
                            
                <div className="button" >Login</div>
                <br></br><br></br>
                <p id="accountExists1">Don't have an account?<Link to ="/SignUpC" id='button'> Sign Up</Link></p>
                
            </div>
        </>
    );
}

export default Login;