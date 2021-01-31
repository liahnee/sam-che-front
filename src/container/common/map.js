import React, { useState } from 'react';
import '../../stylesheets/component/common/map.css';

import City from '../../component/map/city';

// const bgLand = 'https://sam.hided.net/image/game/map/che/bg_winter.jpg';
// const bgRoad = 'https://sam.hided.net/image/game/map/che/miniche_road.png';

const Map = props => {

    const [ showName, setShowName ] = useState(true);


    const cities = cities => {

        cities.map((city, idx) => {

            const { name } = city;
            return
            //  <City showName={showName} name={name} size={} owner={}/>
        })
    };

    const showCityName = city => {
        
    };


    return (
        <div className='world-map'> 
            <div className='bg-1'></div>
            <div className='bg-2'></div>
            {/* {cities(props.cities)} */}
        </div>
    );
}


export default Map;