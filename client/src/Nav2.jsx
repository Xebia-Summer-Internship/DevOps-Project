// import React from 'react';
import './Nav2.css';
import React,{useState} from 'react';
import './LoginH.css';

function Nav2 () {
    var a = JSON.parse(sessionStorage.getItem("hotel-data")).user.name;
    return (
        <>
<div className='Navbar2'>
<br />

<h1 className='Text1'> MakeMyReservation</h1>
    <div id="box">{a}</div>
        </div>
    
        </>
    );
}
export default Nav2;