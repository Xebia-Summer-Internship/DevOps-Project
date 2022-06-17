// Page for Login Page.
import React from 'react';
import Nav from './Nav';
import './SignUp.css';

function Login () {
    return (
        <>
            <Nav />
            <div id='forms'>
                <h1 className='form-heading'>Sign Up</h1>
             
                {/* <p>Hello {inputData.name} {inputData.email} {inputData.password} {inputData.conPassword}</p> */}
                <form className='form' >
                    <input type = 'text' placeholder='Enter your name' name='name'  id="yourName"></input>
                    <input type = 'email' placeholder="Enter you email" name='email'  id="email"></input><br /><br/>
                    <input type = 'text' placeholder="Enter phone number" name='phoneNumber'  id="phoneNumber"></input>
                    <input type = 'date' placeholder="Enter your date of birth" name='DOB'  id="DOB"></input><br /><br/>
                    <input type = 'text' placeholder="Create Your Password" name='password'  id="password"></input>
                    <input type = 'text' placeholder="Confirm Password" name='conPassword'  id="confirmPassword"></input><br></br>
                    <button type='submit'>Submit</button>
                    <br></br><br></br>
                    <p id="accountExists">Already have an account?<a href="" id='signInBtn'> Sign in</a></p>
                </form>
            </div>
        </>
    );
}

export default Login;