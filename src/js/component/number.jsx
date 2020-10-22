import React, { useState, useEffect } from "react";

export const Number = props => {
	let [second, setSecond] = useState(0);
	useEffect(() => {
		setInterval(() => {
			setSecond(second++);
		}, 1000);
	}, []);
	return (
		<div>
			<p>Llevas mirando este contador {second} segundos.</p>
		</div>
	);
};
