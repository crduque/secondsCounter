import React from "react";

export const Button = props => {
	return (
		<button
			className="mt-5"
			type="button"
			onClick={() => {
				window.location.reload(false);
			}}>
			Restart
		</button>
	);
};
