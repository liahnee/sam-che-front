import React from 'react';
import '../../stylesheets/container/turnTable.css';



const Turns = props => {

    const turnData = () => {
        const arr = [];
        let i = 0;
        while (i < 10) {
            arr.push("Rest");
            i++; 
        };
        return arr; 
    }

    return (
        <div id='turns'> 
        {turnData.map((i, idx) => {
            return i;
        })}
        </div>
    );
}


export default Turns;