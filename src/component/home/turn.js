import React from 'react';
import '../../stylesheets/container/turnTable.css';

const Turn = (props) => {
	return (
		<div className="turn">
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
