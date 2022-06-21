import {useReducer} from 'react';
import "./styles.css"
import Digitbutton from './DigitButton';

const ACTIONS = {
  ADD_DIGIT: 'add-digit',
  CHOOSE_OPERATION: 'choose-operation',
  CLEAR: 'clear',
  DELETE_DIGIT: 'delete-digit',
  EVALUTE: 'evaluate'
}

const reducer = (state, {type, payload }) => {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      return {
        ...state,
        currentOpperand: `${currentOpperand}${payload.digit}`
      }
  }
};

const App = () => {
  const [{ currentOpperand,previousOperand,operation }, dispatch] = useReducer(reducer,{})
  return (
    <div className="calcultor-grid">
      <div className="output">
        <div className="operand-current">{currentOpperand} {operation}</div>
        <div className="operand-previous">{previousOperand}</div>
      </div>
      <button className="span-two">AC</button>
      <button>DEL</button>
      <button>/</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>*</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>/</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>-</button>
      <button>.</button>
      <button>0</button>
      <button className="span-two">=</button>
    </div>
  );
}

export default App;
