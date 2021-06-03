import {takeLatest, put, StrictEffect} from "redux-saga/effects";
import {authAction, AuthLoginRequestType, authLoginSuccess} from "./auth.action";


function* authLogin(action: AuthLoginRequestType) {
	try {
		if (action.payload.code === action.payload.controlCode) {
			yield  put(authLoginSuccess)
		}
	} catch (error) {
		yield console.log(error.message);
	}
}

export function* authWatcher(): Generator<StrictEffect> {
	yield takeLatest(authAction.LOGIN_REQUEST, authLogin);
}
