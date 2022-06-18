// Page for SignUp Page For User.
import React from 'react';
import './SignUp.css';
import './SignUpH.css';
import Nav from './Nav';
import { Link } from 'react-router-dom';

function SignUpC () {
    return (
        <>
        <Nav />
            <div id='forms'>
                <h1 className='form-heading'>Sign Up</h1>
              <Link to='/SignUpC'> <button id ='Customer'>As Customer</button> </Link>
               <Link to='/SignUpH'> <button id ='Hotel'>As Hotel</button> </Link>
                
                <form className='form' >
                    <input type = 'text' placeholder='Enter your name' name='name'  id="yourName"></input>
                    <input type = 'email' placeholder="Enter your email" name='email'  id="email"></input><br /><br/>
                    <input type = 'text' placeholder="Enter phone number" name='phoneNumber'  id="phoneNumber"></input>
                    <input type = 'date' placeholder="Enter your date of birth" name='DOB'  id="DOB"></input><br /><br/>
                    <input type = 'text' placeholder="Create Your Password" name='password'  id="password"></input>
                    <input type = 'text' placeholder="Confirm Password" name='conPassword'  id="confirmPassword"></input><br></br>
                    <button type='submit'>Submit</button>
                    <br></br><br></br>
                    <p id="accountExists">Already have an account?<Link to ="/"id='signInBtn'> Sign in</Link></p>
                </form>
            </div>

        </>
    );
}

export default SignUpC;