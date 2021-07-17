import './App.css';
import HomePage from "./pages/HomePage"
import { Switch, Route } from "react-router-dom";
// import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      {/* <NavBar/> */}
      <Switch>
       
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
