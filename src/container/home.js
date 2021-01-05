import React from 'react';
import { connect } from "react-redux";
import '../stylesheets/container/home.css';

import Map from '../component/common/map';
import TurnTable from '../component/home/turnTable';
import NationalSummary from '../component/home/nationalSummary';
import CharacterSummary from '../component/home/characterSummary';

 const Home = props => {



    return (
        <div className='home'>
            <Map />
            <TurnTable />
            <NationalSummary />
            <CharacterSummary />
        </div>
    );
};

const sToP = state => {
    return {

    };
}

const dToP = dispatch => {
    return {

    };
}

export default connect(sToP, dToP)(Home);
