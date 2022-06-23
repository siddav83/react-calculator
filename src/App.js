import {useReducer} from 'react';
import "./styles.css"
import Digitbutton from './DigitButton';
import OperationButton from './OperationButton';

export const ACTIONS = {
  ADD_DIGIT: 'add-digit',
  CHOOSE_OPERATION: 'choose-operation',
  CLEAR: 'clear',
  DELETE_DIGIT: 'delete-digit',
  EVALUTE: 'evaluate'
}

const reducer = (state, {type, payload }) => {
  console.log(state)
  console.log(type)
  console.log(payload)
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if(payload.digit === "0" && state.currentOpperand === "0") return state
      if(payload.digit === "." && state.currentOpperand.includes(".")) return state
      return {
        ...state,
        
        currentOpperand: `${state.currentOpperand || ""}${payload.digit}`,
      }
    case ACTIONS.CLEAR:
      return {}
    case ACTIONS.CHOOSE_OPERATION:
      if (state.currentOpperand == null && state.previousOperand == null) {
        return state
      }
  }
  
  
};

const App = () => {
  const [{ currentOpperand,previousOperand,operation }, dispatch] = useReducer(
    reducer,
    {}
    ) 

  return (
    <div className="calcultor-grid">
      <div className="output">
        <div className="operand-previous">{previousOperand} {operation}</div>
        <div className="operand-current">{currentOpperand}</div>
      </div>
      <button className="span-two" onClick={()=> dispatch({type: ACTIONS.CLEAR})}>AC</button>
      <button>DEL</button>
      <OperationButton operation="/" dispatch={dispatch}/>
      <Digitbutton digit="1" dispatch={dispatch}/>
      <Digitbutton digit="2" dispatch={dispatch}/>
      <Digitbutton digit="3" dispatch={dispatch}/>
      <OperationButton operation="*" dispatch={dispatch}/>
      <Digitbutton digit="4" dispatch={dispatch}/>
      <Digitbutton digit="5" dispatch={dispatch}/>
      <Digitbutton digit="6" dispatch={dispatch}/>
      <OperationButton operation="+" dispatch={dispatch}/>
      <Digitbutton digit="7" dispatch={dispatch}/>
      <Digitbutton digit="8" dispatch={dispatch}/>
      <Digitbutton digit="9" dispatch={dispatch}/>
      <OperationButton operation="-" dispatch={dispatch}/>
      <Digitbutton digit="0" dispatch={dispatch}/>
      <Digitbutton digit="." dispatch={dispatch}/>
      <button className="span-two">=</button>
    </div>
  );
}

export default App;
