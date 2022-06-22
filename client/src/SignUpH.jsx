// Page for SignUp Page For User.
import React from 'react';
import './SignUp.css';
import './SignUpH.css';
import Nav from './Nav';
import { Link } from 'react-router-dom';

function SignUpH () {
    return (
        <>
        <Nav />
    <div className='Cont'>
    <div className='Signup1'>
        <div id='forms'>
                <h1 className='form-heading'>Sign Up</h1> <br />
            <div className='div1'>
                <div > <Link to='/SignUpC'> <button id ='Customer1'>As Customer</button> </Link> </div>
                <div > <Link to='/SignUpH'> <button id ='Hotel1'>As Hotel</button> </Link>  </div> 
            </div>
                <form className='form' >
                <br></br>
                <input type = 'text' placeholder='Enter your name' name='name'  id="yourName"></input>
                    <input type = 'email' placeholder="Enter your email" name='email'  id="email"></input><br /><br/>
                    <input type = 'text' placeholder="Enter phone number" name='phoneNumber'  id="phoneNumber"></input>
                    <input type = 'text' placeholder="Enter your pincode" name='DOB'  id="DOB"></input><br /><br/>
                    <input type = 'text' placeholder="Enter hotel ID" name='phoneNumber'  id="hotelID"></input>
                    <input type = 'text' placeholder="Enter fssai license number" name='phoneNumber'  id="license"></input><br /><br/>
                    <input type = 'text' placeholder="Create Your Password" name='password'  id="password"></input>
                    <input type = 'text' placeholder="Confirm Password" name='conPassword'  id="confirmPassword"></input><br></br>
                    <button type='submit'>Submit</button>
                    <br></br><br></br>
                    <p id="accountExists"><b>Already have an account?</b><Link to ="/"id='signInBtn'> <b>Sign in</b></Link></p>
                </form>
        </div>
    </div>
    </div>
        </>
    );
}

export default SignUpH;