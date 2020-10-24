import React from "react";
import { MyNumber } from "./number.jsx";

//create your first component
export function Home() {
	let one = 1000;
	let ten = 10000;
	let hundred = 100000;
	let thousand = 1000000;
	return (
		<div className="text-center mt-5">
			<p>
				<MyNumber lotOfCeros={thousand} className="thousand m-4" />{" "}
				<MyNumber lotOfCeros={hundred} className="hundred m-4" />{" "}
				<MyNumber lotOfCeros={ten} className="ten m-4" />{" "}
				<MyNumber lotOfCeros={one} className="one m-4" />
			</p>
		</div>
	);
}
