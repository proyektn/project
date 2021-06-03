export const authAction = {
	AGREEMENT_READ: 'AGREEMENT_READ',
	LOAD_LOCAL_STORAGE: 'LOAD_LOCAL_STORAGE',
	LOGIN_REQUEST: 'LOGIN_REQUEST',
	CREATE_CODE: 'CREATE_CODE',
	LOGIN_SUCCESS: 'LOGIN_SUCCESS',
	LOGIN_ERROR: 'LOGIN_ERROR',
}

export const authAgreementRead = {
	type: authAction.AGREEMENT_READ
}

export const authLoadLocalStorage = (auth: any) => {
	return {
		type: authAction.LOAD_LOCAL_STORAGE,
		payload: auth
	}
}

export const authCreateCode = {
	type: authAction.CREATE_CODE
}

type AuthLoginRequestPayloadType = {
	code: number
	controlCode: number
}

export type AuthLoginRequestType = {
	type: typeof authAction.LOGIN_REQUEST
	payload: AuthLoginRequestPayloadType
}

export const authLoginRequest = (code: AuthLoginRequestPayloadType): AuthLoginRequestType => {
	return {
		type: authAction.LOGIN_REQUEST,
		payload: code
	}
}

export const authLoginSuccess = {
	type: authAction.LOGIN_SUCCESS
}

export const authLoginError = (message: string) => {
	return {
		type: authAction.LOGIN_ERROR,
		payload: message
	}
}