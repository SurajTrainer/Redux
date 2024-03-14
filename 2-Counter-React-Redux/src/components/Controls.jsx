import { useRef } from "react";
import { useDispatch } from "react-redux"

const Controls = () => {

    const dispatch = useDispatch();
    const inputElement = useRef();

    const handleIncrement = () => {
      dispatch({type : 'INCREMENT'})
    }

    const handleDecrement = () => {
      dispatch({type : 'DECREMENT'})
    }

    const handlePrivacyToggle = () => {
      dispatch({type : 'PRIVACY_TOGGLE'})

    }


    const handleAdd = () => {
      dispatch({type : 'ADD', payload : {num : inputElement.current.value}})
      inputElement.current.value = ''
    }


    const handleSubtract = () => {
      dispatch({type : 'SUBTRACT', payload : {num : inputElement.current.value}})
      inputElement.current.value = '';
    }

   
    return (
      <>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-btn">
        <button type="button" className="btn btn-danger" onClick={handleIncrement}> +1 </button>
        <button type="button" className="btn btn-warning" onClick={handleDecrement}> -1 </button>
        <button type="button" className="btn btn-info" onClick={handlePrivacyToggle}> privacy button </button>
      </div>


        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-btn">
        <input type="text" className="control-input" placeholder="Enter Number" ref={inputElement}/>
        <button type="text" className="btn btn-info" onClick={handleAdd}> Add</button>
        <button type="text" className="btn btn-success" onClick={handleSubtract}> Subtract </button>
      </div>
      </>
    )
}

export default Controls