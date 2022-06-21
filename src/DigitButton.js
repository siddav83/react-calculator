import { ACTIONS } from './App';

export default function Digitbutton ({dispatch,digit}) {

    return <button onClick={()=>dispatch({type: ACTIONS.ADD_DIGITS, payload: {digit} })}>{digit}</button>
}