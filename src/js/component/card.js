import React from "react";

export function Card(imagen, title) {
	return (
		<div className="card text-center">
			<img
				className="card-img-top"
				src={imagen.imagen}
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title">Title</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make
					up the bulk of the card&apos content.
				</p>
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
}
