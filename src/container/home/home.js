import React from 'react';
import { connect } from "react-redux";
import '../stylesheets/container/home.css';

import PolicyBoard from '../../component/home/policyBoard';
import Map from '../common/map';
import TurnTable from '../user/turnTable';
import NationalSummary from '../../component/home/nationalSummary';
import CharacterSummary from '../../component/home/characterSummary';


 const Home = props => {



    return (
        <div className='home'>
            <PolicyBoard />
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
