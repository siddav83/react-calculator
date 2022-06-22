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
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if(payload.digit === "0" && state.currentOpperand === "0") return state
      if(payload.digit === "." && state.currentOpperand.includes(".")) return state
      return {
        ...state,
        currentOpperand: `${state.currentOpperand || ""}${payload.digit}`,
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
      <button className="span-two">AC</button>
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
