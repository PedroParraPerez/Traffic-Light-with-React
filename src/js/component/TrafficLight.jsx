import React, { useState } from "react";
import "../component/TrafficLight.css";

const TrafficLight = () => {
	const [color, setColor] = useState(`red`);
	const [color2, setColor2] = useState(`yellow`);
	const [color3, setColor3] = useState(`green`);

	const changeRed = () => {
		if (color == "red") {
			setColor(`redshadow`);
			setColor3(`green`);
			setColor2(`yellow`);
		} else {
			setColor(`red`);
		}
	};
	const changeYellow = () => {
		if (color2 == "yellow") {
			setColor2(`yellowshadow`);
			setColor(`red`);
			setColor3(`green`);
		} else {
			setColor2(`yellow`);
		}
	};
	const changeGreen = () => {
		if (color3 == "green") {
			setColor3(`greenshadow`);
			setColor2(`yellow`);
			setColor(`red`);
		} else {
			setColor3(`green`);
		}
	};
	return (
		<>
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-10" id="semaforo">
						<div className="row">
							<div
								className={color}
								id="red"
								onClick={changeRed}></div>
						</div>
						<div className="row">
							<div
								className={color2}
								id="yellow"
								onClick={changeYellow}></div>
						</div>
						<div className="row">
							<div
								className={color3}
								id="green"
								onClick={changeGreen}></div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default TrafficLight;
