import logo from './logo.svg';
import './stylesheets/App.css';

import Routes from './routes';
import TopMenu from './component/common/topMenu';
import BottomMenu from './component/common/bottomMenu';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopMenu />
      </header>
      <main>
        <Routes />
      </main>
    <footer>
      <BottomMenu />
    </footer>
  );
}

export default App;
