// Code Keypad Component Here
import React from 'react';

function Keypad () {
    
    function changePassword (event) {
        console.log("Entering password:", `${event.target.value}`)
    }
    return ( 
        <div>
            <input type="password" onChange={changePassword} /> 
        </div>
    );
}

export default Keypad;
