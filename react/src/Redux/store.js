import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { loginReducer } from "./Login/reducer";
import { teacherReducer } from "./data/reducer";
import { signupReducer } from "./SignUp/reducer";

export const rootReducer=combineReducers({
    login:loginReducer,
    signup: signupReducer,
    products:teacherReducer
});

export const store =createStore(rootReducer, applyMiddleware(thunk))