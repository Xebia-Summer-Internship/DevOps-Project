// Page for Login Page.
import React from 'react';
import Nav from './Nav';
import './Login.css';
import { Link } from 'react-router-dom';

function Login () {
    return (
        <>
            <Nav />
            <div id='forms1'>
                <h1 className='form-heading'>Login</h1>     
                <form className='form1' >
                    <input type = 'email' placeholder="Enter your email" name='email'  id="email1"></input><br /><br/>
                    <input type = 'text' placeholder="Enter your Password" name='password'  id="password1"></input> <br /> 
                    <Link to ="" id="forgot">Forgot Password?</Link> <br />               
                    <button type='submit'>Login</button>
                    <br></br><br></br>
                    <p id="accountExists1">Don't have an account?<Link to ="/SignUpC" id='signInBtn1'> Sign Up</Link></p>
                </form>
            </div>
        </>
    );
}

export default Login;