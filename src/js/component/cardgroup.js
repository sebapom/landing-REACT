import React from "react";
import { Card } from "./card";
import img from "../../img/batman.jpg";
import img1 from "../../img/spiderman.jpg";
import img2 from "../../img/superman.jpg";
import img3 from "../../img/ironman.jpg";

export function CardContainer(props) {
	return (
		<div className="container">
			<div className="card-deck">
				<Card imagen={img} />
				<Card imagen={img3} />
				<Card imagen={img1} />
				<Card imagen={img2} />
			</div>
		</div>
	);
}
