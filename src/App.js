import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Works, About, Contact } from "./pages/index";
import Header from "./components/Header";
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Works} />
        <Route path="/portfolio" component={About} />
        <Route path="/edu" component={Contact} />
      </Switch>
      <Footer />
  </Router>
  );
}

export default App;
