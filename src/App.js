import './stylesheets/container/app.css';

import Routes from './routes';
import TopMenu from './component/common/topMenu';
import BottomMenu from './component/common/bottomMenu';
import Footer from './component/common/footer';

function App() {
	return (
		<div className="app">
			<header className="app-header">
				<TopMenu />
			</header>
			<main>
				<Routes />
			</main>
			<footer>
				<BottomMenu />
				<Footer />
			</footer>
		</div>
	);
}

export default App;
