import React from 'react';
import '../../stylesheets/container/turnTable.css';

const Turn = (props) => {


    const { turn } = props; 

    const highlight = selected => {
        let isSelected = false;
		selected.forEach(element => {
			if (element[0] === turn[0]){
				isSelected = true;
			}
		});

		if (isSelected) {
            return "highlight"; 
        } else {
            return "";
                }
    };

	return (
		<div className={`turn ${highlight(props.selected)}`} onClick={() => props.onClick(props.turn)}>
			<div className="turn-order">
				<p>
					#&nbsp;-&nbsp;
					<span className="turn-time">7:11</span>
				</p>
			</div>
			<div className="turn-year">
				{'197'}year&nbsp;{'1'}month
			</div>
			<div className="turn-action">{'인재탐색'}</div>
			<div />
		</div>
	);
};

export default Turn;
