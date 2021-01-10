import React, { useState } from 'react';
import { connect } from 'react-redux';
import '../../stylesheets/container/turnTable.css';

import Turn from '../../component/home/turn';




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
		}
	};

	// options to selecting turns  functions

	const onSelectAll = () => {
		// setSelected([]);
	};

	const onSelectOdds = () => {};

	// repeat functions

	const submit = (props) => {};

	// rendering functions
	const renderTurns = () => {

		let i = 1;
		const turns = [];
		while (i < 31) {
			turns.push([ i, '197yr 7mo', '인재 탐색' ]);
			i++;
		}

		console.log(turns);
		return turns.map((turn, idx) => {
			return <Turn turn={turn} key={idx}/>;
		});
	};

	const renderTurnOptions = (props) => {
		// render turn options
		return <div />;
	};

	return (
		<div id="turn-table">
			<div className="turns">
			{renderTurns()}
				</div>
			<div>
				<div>
					<div>전체</div>
					<div>홀수</div>
					<div>짝수</div>
				</div>
				{/* {renderTurnOptions()} */}
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
