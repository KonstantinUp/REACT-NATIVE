import {createStore,combineReducers} from "redux"
import {reducer as formRedcer} from "redux-form"


const mainReducer = combineReducers({
   form:formRedcer
});

const store = createStore(mainReducer);

export default store;