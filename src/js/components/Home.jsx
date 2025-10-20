import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	
	const [numero, setNumero] = useState(0)
	const aumentarNumero = () => {
		setNumero(numero+1)
	
	}




setInterval(function () {element.innerHTML += "Hello"}, 1000);






	const interval = setInterval(aumentarNumero, 500)
	setInterval(function (){aumentarNumero += })
	return (
		<div className="text-center">
           {numero}
			<button onClick={aumentarNumero}>Cambiar número</button>

			
		</div>
	);
};



export default Home;