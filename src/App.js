import React, { useState } from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Works, About, Contact } from "./pages/index";
import Header from "./components/Header";
import Footer from './components/Footer';
import MobileMenu from "./components/MobileMenu";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  const [open, setOpen] = useState(false);
  return (
    <Router>
      {/* for scroll restoration on clicking page link  */}
      <ScrollToTop />
      <Header  open={open} setOpen={setOpen}/>
      <MobileMenu  open={open} setOpen={setOpen}/>
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
