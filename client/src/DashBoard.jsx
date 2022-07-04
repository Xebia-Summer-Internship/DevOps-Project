import React from 'react';
import './DashBoard.css';
import Nav1 from './Nav1';
import Sidebar from './Components/Sidebar'



function DashBoard () {
    return (
        <>
        <Nav1 />
        <div id='Dash'>
        <Sidebar />
            <div className="main-dash">
                <div className="location-card">
                    <div className='row-dash'>
                        <div class='col'>
                            <div className='location-bumtton'>
                                <h3 className='title-bumtton'>Enter Address</h3>
                                <input type="text" name="" id="" />
                            </div>
                        </div>

                        <div class='col'>
                            <div className='location-bumtton'>
                                <h3 className='title-bumtton'>Enter Pincode</h3>
                                <input type="number" name="" id="" />
                            </div>
                        </div>
                        
                    </div>
                </div>
                <br /> <br />
                <div className="location-card">
                <div class='row-dash'>
                    <div class='col'>
                        <div className='bumtton'>
                            <h3 className='title-bumtton'>Enter Date</h3>
                            <input type="date" name="" id="" />
                        </div>
                    </div>
                   
                    <div class='col'>
                        <div className='bumtton'>
                            <h3 className='title-bumtton'>Start Time</h3>
                            <input type="time" />
                        </div>
                    </div>
                    
                    <div class='col'>
                        <div className='bumtton'>
                            <h3 className='title-bumtton'>End time</h3>
                            <input type="time" name="" id="" />
                        </div>
                    </div>
                  
                    <div class='col'>
                        <div className='bumtton'>
                            <h3 className='title-bumtton'>Enter Party Size</h3>
                            <input type="dropdown" name="" id="" />
                        </div>
                    </div>
                </div>
                </div>
                <br />
                <div className='seats'>
                    
                </div>
            </div>
        
        </div>
        

        </>
    );
}

export default DashBoard;