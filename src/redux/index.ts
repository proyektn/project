import {combineReducers} from "redux";
import {all} from "redux-saga/effects";
import {authReducer} from "./auth/auth.reducer";
import {authWatcher} from "./auth/auth.saga";

export const rootReducer = combineReducers({
	stateAuth: authReducer
});

type RootReducerType = typeof rootReducer;
export type StateType = ReturnType<RootReducerType>;

export function* rootSaga() {
	yield all([authWatcher()]);
}