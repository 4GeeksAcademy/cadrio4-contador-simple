import SecondsCounter from "./SecondsCounter"
import { useState, useEffect } from "react"


const Home = () => {
	const [seconds, setSeconds] = useState(0)

	let intervalId = null
	useEffect(() => {
		intervalId = setInterval(() => {
			setSeconds(prev => prev + 1)
		}, 1000);

		// Limpiar el intervalo cuando el componente se desmonte
		return () => clearInterval(intervalId);
	}, []);

	const reiniciarSegundero =() => {
		setSeconds(0)
	}
	return (

		<div className="d-flex justify-content-center">
			{/* <h1>La variable second tiene el valor: {seconds}</h1>*/}
			<SecondsCounter counter={seconds}/>
			<button className="btn btn-outline-secondary col-1 rounded-5" onClick={reiniciarSegundero}>Reiniciar<br/>segundero
			</button>
		</div>
	)
}
export default Home;


