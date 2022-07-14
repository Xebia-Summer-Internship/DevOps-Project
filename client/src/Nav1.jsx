import React from 'react';
import './Nav1.css';


function Nav1 () {
    //var userName = "Kartikey"
    var json = JSON.parse(sessionStorage.getItem('usr_data'));
    var userName = json.user.name;
    console.log(json);
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