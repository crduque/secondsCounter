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
			<p>Lets count...</p>
			<p>
				{" "}
				<MyNumber
					lotOfCeros={thousand}
					className="thousand p-0 ml-2 mr-2"
				/>{" "}
				<MyNumber
					lotOfCeros={hundred}
					className="hundred p-0 ml-2 mr-2"
				/>{" "}
				<MyNumber lotOfCeros={ten} className="ten p-0 ml-2 mr-2" />{" "}
				<MyNumber lotOfCeros={one} className="one p-0 ml-2 mr-2" />{" "}
				seconds.
			</p>
		</div>
	);
}
