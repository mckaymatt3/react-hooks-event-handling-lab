// Code EyesOnMe Component Here
import React from 'react';

function EyesOnMe () {
    function blur (event) {
        console.log("Lock eyes from across the room")
    }
    function focus (event) {
        console.log("Down the drinks as the rhythms boom")
    }

    return ( 
        <div>
            <button onBlur={blur} onFocus={focus}> 
                Basic
            </button>
        </div>
     );
}

export default EyesOnMe ;