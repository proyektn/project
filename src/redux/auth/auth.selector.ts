import {StateType} from "../index";

export const authSelector = ({stateAuth}: StateType) => {
	return stateAuth.isAuth
}

export const agreementSelector = ({stateAuth}: StateType) => {
	return stateAuth.isAgreement
}

export const codeSelector = ({stateAuth}: StateType) => {
	return stateAuth.code
}