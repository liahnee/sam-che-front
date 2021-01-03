import { Route, Switch } from 'react-router';
import Home from './container/home';

const Routes = (
	<div>
		<Switch>
			<Route exact path="/">
				<Home />
			</Route>
			<Route>
				<NoMatch />
			</Route>
		</Switch>
	</div>
);

export default Routes;

// https://reactrouter.com/core/api/Switch
