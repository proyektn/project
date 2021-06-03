import React from "react";
import {useSelector} from "react-redux";
import {agreementSelector, authSelector} from "../../redux/auth/auth.selector";
import {Redirect} from "react-router-dom";

export const authRedirect = (Component: any) => {
	const RedirectComponent = () => {
		const isAuth = useSelector(authSelector)
		const isAgreement = useSelector(agreementSelector)
		if (!isAgreement) {
			return <Redirect to='/agreement' />
		}
		if (!isAuth) {
			return <Redirect to='/step2' />
		}
		return <Component />
	}
	return <RedirectComponent />
}