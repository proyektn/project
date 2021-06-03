import React, {useEffect} from 'react';
import {Container} from "./components/Container/Container";
import {Routes} from "./Routes/Routes";
import {useDispatch, useSelector} from "react-redux";
import {agreementSelector, authSelector} from "./redux/auth/auth.selector";
import {authLoadLocalStorage} from "./redux/auth/auth.action";

function App() {
	const dispatch = useDispatch()
	const isAuth = useSelector(authSelector)
	const isAgreement = useSelector(agreementSelector)
	useEffect(() => {
		dispatch(authLoadLocalStorage(JSON.parse(localStorage.getItem('auth')!) ?? {
			isAgreement: false,
			isAuth: false
		}))
	}, [dispatch])

	useEffect(() => {
		localStorage.setItem('auth', JSON.stringify({isAgreement: isAgreement, isAuth: isAuth}))
	}, [isAgreement, isAuth])
	return (
		<Container>
			<Routes />
		</Container>
	);
}

export default App;