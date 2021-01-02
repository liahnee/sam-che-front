import React from 'react';

const Slider = props => {
    const max = 150;
    


    return (
        <div className="slide-container">
            <input type="range" min="1" max="100" value="50" className="slider" id="slider-1"></input>
            <input type="range" min="1" max="100" value="50" className="slider" id="slider-2"></input>
            <input type="range" min="1" max="100" value="50" className="slider" id="slider-3"></input>
        </div>
    )
};

export default Slider;

