import {authAction} from "./auth.action";

type InitType = {
	isAuth: boolean
	isAgreement: boolean
	code: number | null
}

const init: InitType = {
	isAuth: false,
	isAgreement: false,
	code: null
}

type ActionType = {
	type: string
	payload: any
}

export const authReducer = (state = init, action: ActionType): InitType => {
	switch (action.type) {
		case (authAction.AGREEMENT_READ):
			return {
				...state,
				isAgreement: true
			}
		case (authAction.LOGIN_SUCCESS):
			return {
				...state,
				isAuth: true
			}
		case (authAction.LOAD_LOCAL_STORAGE):
			return {
				...state,
				isAuth: action.payload.isAuth,
				isAgreement: action.payload.isAgreement
			}
		case (authAction.CREATE_CODE):
			return {
				...state,
				code: Math.round(Math.random() * 100000)
			}
		default:
			return state
	}
}