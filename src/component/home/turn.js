import React from 'react';
import '../../stylesheets/container/turnTable.css';

const Turn = (props) => {
	const { turn } = props;

	const highlight = (selected) => {

		let isSelected = false;
		selected.forEach((element) => {
			if (element.idx === turn.idx) {
				isSelected = true;
			}
		});

		if (isSelected) {
			return 'highlight';
		} else {
			return '';
		}
	};

	return (
		<div className={`turn ${highlight(props.selected)}`} onClick={() => props.onClick(props.turn)}>
			<div className="turn-order">
				<div>
					{turn.idx}&nbsp;-&nbsp;
					<span className="turn-time">{turn.time}</span>&nbsp;
					
				</div>
                <div>{turn.date}</div>
			</div>
			<div>
					<div className="turn-action">{turn.action}</div>
			</div>
			<div />
		</div>
	);
};

export default Turn;
