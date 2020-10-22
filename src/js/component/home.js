import React from "react";
import { MyNumber } from "./number.jsx";

//create your first component
export function Home() {
	return (
		<div className="mt-5">
			<p>
				Llevas mirando este contador <MyNumber /> <MyNumber />{" "}
				<MyNumber /> <MyNumber /> segundos.
			</p>
		</div>
	);
}
