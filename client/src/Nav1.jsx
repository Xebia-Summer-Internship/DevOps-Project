import React from 'react';
import './Nav1.css';
import FaceIcon from '@mui/icons-material/Face';

function Nav1 () {
    var a="Kartikeya";
    return (
        <>
<div className='Navbar1'>
<br />

<h1 className='Text1'> MakeMyReservation</h1>
    <div id="box">
        <div class='Nav-row'>
            <div class='icon'><FaceIcon /> </div>
            <div class='name'>{a}</div>
        </div>
        </div>
        </div>
        </>
    );
}

export default Nav1;