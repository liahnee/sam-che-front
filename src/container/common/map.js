import React, { useState } from 'react';
import '../../stylesheets/component/common/map.css';

import City from '../../component/map/city';

const Map = props => {

    const [ showName, setShowName ] = useState(true);


    const cities = cities => {

        cities.map((city, idx) => {

            const { name } = city;
            return (
                <City showName={showName} name={name} size={} owner={}/>
            )
        })
    };

    const showCityName = city => {
        
    };


    return (
        <div className='map'> 
            <div className='map bg-1'></div>
            <div className='map bg-2'></div>
            {/* {cities(props.cities)} */}
        </div>
    );
}


export default Map;