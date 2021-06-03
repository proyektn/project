import {Switch, Route} from 'react-router-dom'
import {homeRedirect} from "../hoc/HomeRedirect/HomeRedirect";
import {authRedirect} from "../hoc/AuthRedirect/AuthRedirect";
import {Agreement} from "../pages/Agreement/Agreement";
import {AuthStep1} from "../pages/AuthStep1/AuthStep1";
import {AuthStep2} from "../pages/AuthStep2/AuthStep2";
import {Home} from "../pages/Home/Home";


export const Routes = () => {
	return (
		<>
			<Switch>
				<Route exact path="/agreement" render={() => homeRedirect(Agreement)} />
				<Route exact path="/step2" render={() => homeRedirect(AuthStep1)} />
				<Route exact path="/step3" render={() => homeRedirect(AuthStep2)} />
				<Route exact path="/" render={() => authRedirect(Home)} />
			</Switch>
		</>
	)
}