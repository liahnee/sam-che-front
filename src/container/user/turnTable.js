import React, { useState, useEffect } from 'react';
import '../../stylesheets/container/turnTable.css';

import Turn from '../../components/home/turn';

const TurnTable = (props) => {

	// highlight to select functons 
	const [ highlight, setHighlight ] = useState(false);
	const [ selected, setSelected ] = useState([]);


	const onMouseEnter = (props) => {};

	const onMouseDown = (props) => {
		setHighlight(true);
	};

	const onMouseUp = (props) => {
		setHighlight(false);
	};

	const onMouseClick = (turn) => {
		const isSelected = selected.includes(turn) ? true : false;
		if (isSelected) {
			//filter it out
		} else {
			selected.push(turn);
		};
	};


	// options to selecting turns  functions
	
	const onSelectAll = () => {

		// setSelected([]);
	};

	const onSelectOdds = () => {

	}


	// repeat functions 



	const submit = (props) => {};





	// rendering functions 
	const renderTurns = (props) => {


		return turnList.map((turn, idx) => {
			return (
				<Turn selectedList={selected} />
			);
		});
	};

	const renderTurnOptions = (props) => {
        // render turn options
        return (
            <div>

            </div>
        );
	};








	return (
		<div id="turn-table">
			{renderTurns()} 
            <div>
				<div>
					<div>전체</div>
					<div>홀수</div>
					<div>짝수</div>
					</div>
            {renderTurnOptions()}
                
            </div>
		</div>
	);
};

const sToP = (state) => {
	return {};
};

const dToP = (dispatch) => {
	return {};
};

export default connect(sToP, dToP)(TurnTable);
