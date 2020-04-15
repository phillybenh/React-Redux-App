import {combineReducers} from 'redux';
import {adviceReducer as advice} from './adviceReducer';
import { catReducer as cat } from './catReducer';


export default combineReducers({
    advice, 
    cat
})