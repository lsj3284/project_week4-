//6

import { createStore} from "redux";
import { combineReducers} from "redux";
import todos from "../store/todos.js";

const rootReducer =combineReducers({
 todos,
});

const store = createStore(rootReducer);

export default store;