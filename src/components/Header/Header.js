import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    return (
        <div>
 <div style={{backgroundColor:'#54a0ff'}} className="navbar  flex flex-col  text-white">

    
    <div>
    <h1 className='text-4xl font-semi-bold'> <FontAwesomeIcon icon={faDumbbell} />  E-Max Fitness Care</h1>
</div>
<div className="flex-none">
<ul className="menu menu-horizontal p-0">
<li><a href="/home">Home</a></li>
<li><a href="/service">Service</a></li>
<li><a href="/client">Client</a></li>
<li><a href="/client">Contact us</a></li>
<li><a href="/client">About us</a></li>

</ul>
</div>
   
</div>
            
        </div>
    );
};

export default Header;