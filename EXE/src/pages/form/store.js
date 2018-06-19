import {createStore,combineReducers,applyMiddleware} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'
import {reducer as formReducer} from "redux-form";

const mainReducer = combineReducers({
   form:formReducer
});


const store = createStore(mainReducer,composeWithDevTools(applyMiddleware()));


export default store;