import React from "react";
import { MyNumber } from "./number.jsx";

//create your first component
export function Home() {
	let one = 1000;
	let ten = 10000;
	let hundred = 100000;
	let thousand = 1000000;
	return (
		<div className="mt-5">
			<p>
				Llevas mirando este contador <MyNumber lotOfCeros={thousand} />{" "}
				<MyNumber lotOfCeros={hundred} /> <MyNumber lotOfCeros={ten} />{" "}
				<MyNumber lotOfCeros={one} /> segundos.
			</p>
		</div>
	);
}
