import {useSelector} from "react-redux";
import {agreementSelector, authSelector} from "../../redux/auth/auth.selector";
import {Redirect} from "react-router-dom";
import React from "react";

export const homeRedirect = (Component: any) => {
	const RedirectComponent = () => {
		const isAuth = useSelector(authSelector)
		const isAgreement = useSelector(agreementSelector)
		if (isAuth && isAgreement) {
			return <Redirect to='/' />
		}
		return <Component />
	}
	return <RedirectComponent />
}