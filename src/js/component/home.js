import React from "react";
import { Nav } from "./navbar";
import { Jumbo } from "./jumbotron";
import { CardContainer } from "./cardgroup";

//create your first component
export function Home() {
	return (
		<div>
			<Nav />
			<Jumbo />
			<CardContainer />
		</div>
	);
}
