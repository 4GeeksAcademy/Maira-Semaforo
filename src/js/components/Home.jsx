import React, { useState } from "react";


//create your first component
const Home = () => {
	const [color, setColor] = useState("yellow");
	
	return (
		<div>
			<div className="backstick"></div>
			<div className="traffic-light">
				<div onClick={() => setColor("red")} 
				className={"light red" + (color === "red" ? " shine" : "")}>
				</div>
				<div onClick={() => setColor("yellow")} 
				className={"light yellow" + (color === "yellow" ? " shine" : "")}>
				</div>
				<div onClick={() => setColor("green")} 
				className={"light green" + (color === "green" ? " shine" : "")}>
				</div>
			</div>
		</div>
	);
};

export default Home;