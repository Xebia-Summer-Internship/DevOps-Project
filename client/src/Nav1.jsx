import React from 'react';
import './Nav1.css';


function Nav1 (props) {
    var userName = "Anshuman"
    return (
        <>
            <div className='Navbar1'>
                <br />
                <h1 className='Text1'> MakeMyReservation</h1>
                <div id="box">{userName}</div>
            </div>
        </>
    );
}

export default Nav1;