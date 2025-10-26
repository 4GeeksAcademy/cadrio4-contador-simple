import "../../styles/SecondsCounter.css"


const SecondsCounter = (props) => {
    return (

                <div className="d-flex col-5 seconds-counter @font-face rounded-3">
                            <div className="col-6 fa-regular fa-clock"></div>
                            
                            <div className="col-6">{props.counter}</div>
                </div>
    )

}

export default SecondsCounter;