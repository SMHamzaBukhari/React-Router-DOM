import './App.css';
import Dashboard from './components/dashboard';
import Login from './components/login';
import Signup from './components/signup';
import Routing from './routing';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      {/* <Login/> */}
      <Routing/>
      {/* <Signup/> */}
      {/* <Dashboard/> */}
      </header>
    </div>
  );
}

export default App;
