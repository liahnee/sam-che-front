import React, { useState } from 'react';
import { connect } from 'react-redux';
import '../../stylesheets/container/turnTable.css';

import Turn from '../../component/home/turn';




const TurnTable = (props) => {
	// highlight to select functons
	const [ highlight, setHighlight ] = useState(false);
	const [ selectedTurns, setSelectedTurns ] = useState([]);

	const onMouseEnter = (turn) => {

		if (highlight) {
			select(turn);
		};
	};

	const onMouseDown = (props) => {
		setHighlight(true);
	};

	const onMouseUp = (props) => {
		setHighlight(false);
	};

	const onMouseClick = (turn) => {
		console.log(turn);
		select(turn);
	};

	// options to selecting turns  functions

	const select = (turn) => {
		// console.log("inside Select")
		// console.log("is selected Turns + turn", selectedTurns, turn)
		let isSelected = false;
		selectedTurns.forEach(element => {
			// console.log("element ", element.idx)
			if (element.idx === turn.idx){
				isSelected = true;
			};
		});

		if (isSelected) {
			console.log("true")
			const filtered = selectedTurns.filter(item => item.idx !== turn.idx );
			setSelectedTurns(filtered);
		} else {
			console.log("false")
			setSelectedTurns([...selectedTurns, turn]);
		};
	};

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
			turns.push({ time: `${i+1}:11`, date:`197yr ${i+1}mo`, action:'인재 탐색', idx: i+1 });
			i++;
		};
		return turns.map((turn, idx) => {
			return <Turn turn={turn} key={idx} onClick={onMouseClick} selected={selectedTurns}/>;
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
