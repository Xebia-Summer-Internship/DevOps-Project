// Page for Login Page.
import React from 'react';
import Nav from './Nav';
import './Login.css';
import { Link } from 'react-router-dom';
import Theme from './img/img2.jpg';


function Login () {
    return (
        <>
            <Nav />
            <div className='Main'>
            <div className='design'>
            </div>
            <div id='forms1'>
                <h1 className='form-heading'>Login</h1>  
                <Link to='/SignUpC'> <button id ='Customer2'>As Customer</button> </Link>
                <Link to='/SignUpH'> <button id ='Hotel2'>As Hotel</button> </Link>   
                <form className='form1' >
                    <input type = 'email' placeholder="Enter your email" name='email'  id="email1"></input><br /><br/>
                    <input type = 'password' placeholder="Enter your Password" name='password'  id="password1"></input> <br /> 
                    <Link to ="" id="forgot"><b>Forgot Password?</b></Link> <br />               
                    <button type='submit'>Login</button>
                    <br></br><br></br>
                    <p id="accountExists1"><b>Don't have an account?</b><Link to ="/SignUpC" id='signInBtn1'><b> Sign Up</b></Link></p>
                </form>
            
            </div>
            </div>
        </>
    );
}

export default Login;