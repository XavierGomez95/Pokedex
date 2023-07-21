import './App.css';
import PokedexPage from "./PokedexPage";
import {BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <Router>
        <PokedexPage />
    </Router>
  );
}

export default App;
