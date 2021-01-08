import React from 'react';
import '../../stylesheets/component/common/map.css';

const City = props => {

    return (
        <div className='city'> 
            <img />
            <div className="city-name">{props.name}</div>
        </div>
    );
}


export default Map;