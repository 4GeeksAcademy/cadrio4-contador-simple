import "../../styles/SecondsCounter.css"
import { useState , useEffect } from "react"


const SecondsCounter = () => {
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
        <>
        <div className="d-flex flex-column align-items-center">
            <div className="d-flex seconds-counter">
                <div className="me-2">
                    MALA
                </div>
                <div className="">
                    {seconds}
                </div>
            </div>
            <button className="mt-3" onClick={reiniciarSegundero}>Hola</button>
        </div>
        </>      
    )

}

export default SecondsCounter;