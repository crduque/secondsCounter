import React, { useState, useEffect } from "react";

export const MyNumber = props => {
	let [second, setSecond] = useState(0);
	useEffect(() => {
		setInterval(() => {
			setSecond(second++);
		}, 1000);
	}, []);
	// if (second > 9) {
	// 	second = setSecond(0);
	// } else {
	// 	second = setSecond(second++);
	// }
	return <span>{second}</span>;
};
