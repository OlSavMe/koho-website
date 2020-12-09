import React from "react";
import "../styles/Footer.scss";


const Footer = () => {

 
  return (
 
      <footer>
        <div className="footer-container">
            <section className="footer-main">
       <ul className="footer-column">
       <li>Contact me:</li>
        <li>info@koho.com</li>
        <li>+358 99 99 999</li>
       </ul>

       <ul className="footer-column">
       <li>Follow me:</li>
       <ul className="some"> 
       <li><a href="https://www.linkedin.com/in/alfonsocon/">
           <img src="img/in-new.svg" alt="linkedin"/></a></li>
           <li><a href="https://www.linkedin.com/in/alfonsocon/">
           <img src="img/insta-new.svg" alt="linkedin"/></a></li>
           {/* <li><a href="https://www.linkedin.com/in/alfonsocon/">
           <img src="img/facebook.png" alt="linkedin"/></a></li>
           <li><a href="https://www.linkedin.com/in/alfonsocon/">
           <img src="img/twitter.png" alt="linkedin"/></a></li> */}
       </ul>
       </ul>
       <ul className="footer-column">
       <li>Works</li>
       <li>About</li>
        <li>Contact</li>
       </ul>
       </section>
       <section className="footer-copyright">
       <ul className="footer-column">
       <li>.koho © 2020</li>
       </ul>
       </section>
       </div>
     
      </footer>

  );
};
export default Footer;