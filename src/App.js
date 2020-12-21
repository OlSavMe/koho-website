import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Works, About, Contact } from "./pages/index";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MobileMenu from "./components/MobileMenu";
import ScrollToTop from "./components/ScrollToTop";
import ProjectPage from "./components/ProjectPage";

const App = () => {
  const [open, setOpen] = useState(false);
  return (
    <Router>
      <ScrollToTop />
      <Header open={open} setOpen={setOpen} />
      <MobileMenu open={open} setOpen={setOpen} />
      <Switch>
        <Route path="/" exact component={Works} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/project/:id" component={ProjectPage} />
      </Switch>
      <Footer />
    </Router>
  );
};
export default App;
