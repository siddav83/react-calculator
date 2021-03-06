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
      if(state.overwrite) {
        return {
          ...state,
          currentOperand: payload.digit,
          overwrite: false,
        }
      }
      if(payload.digit === "0" && state.currentOpperand === "0") return state
      if(payload.digit === "." && state.currentOpperand.includes(".")) return state
      return {
        ...state,
        
        currentOpperand: `${state.currentOpperand || ""}${payload.digit}`,
      }
      case ACTIONS.CHOOSE_OPERATION:
        if (state.currentOpperand == null && state.previousOperand == null) {
          return state
        }
        if (state.previousOperand == null) {
          return {...state,
            operation: payload.operation,
            previousOperand: state.currentOpperand,
            currentOpperand: null
          }
        }
          if (state.current == null) {
            return {
              ...state,
              operation: payload.operation,
            }
          }
        
        return{
          ...state,
          previousOperand: evaluate(state),
          operation:payload.operation,
          currentOpperand: null,
        }
        
    case ACTIONS.CLEAR:
      return {}
    
    case ACTIONS.EVALUTE:
      if(state.operation == null ||
         state.currentOperand ==null ||
         state.previousOperand== null) {
           return state
      }
      return {
        ...state,
        overwrite: true,
        previousOperand: null,
        operaiton: null,
        currentOperand: evaluate(state)
      }
  }
};

const evaluate = ({previousOperand, currentOpperand, operation}) => {
  const previous = parseFloat(previousOperand)
  const current = parseFloat(currentOpperand)
  if (isNaN(previous) || isNaN(current)) return ""
  let calculation = ""
   switch (operation) {
     case "+":
      calculation = previous + current
      break
    case "-":
      calculation = previous - current
      break
      case "/":
        calculation = previous / current
      break
      case "*":
        calculation = previous * current
      break
   }
}

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
      <button className="span-two" onClick={()=> dispatch({type: ACTIONS.EVALUTE})}>=</button>
    </div>
  );
}

export default App;
