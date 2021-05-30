import React from 'react';
import "./Footer.css";
import { FaFacebook,FaGithub,FaYoutube,FaLinkedin} from "react-icons/fa";

const Footer = () => {
    return (
        <div className="main-footer">
      <div className="container">
        <div className="row">
   
          <div className="col">
            <h4>340(4th Floor), Road #25</h4>
            <h5 className="list-unstyled">
              <li>New DOHS,Dhaka,Bangladesh</li>
              <li>Phone: 01839646570</li>
              <li>ProgrammingHero@gmail.com</li>
            </h5>
          </div>
      
          <div className="col">
            <h4>Company</h4>
            <ui className="list-unstyled">
              <li>About</li>
              <li>Site Map</li>
              <li>Support Center</li>
              <li>Submit Listing</li>
            </ui>
          </div>

          <div className="col">
            <h4>Quick Link</h4>
            <ui className="list-unstyled">
              <li>Sales</li>
              <li>Contact</li>
              <li>Rentals</li>
              <li>Our Blog</li>
            </ui>
          </div>
       
          <div className="col">
            <h4>About Us</h4>
            <ui className="list-unstyled">
              <p>We are the top real estate agency in Bangladesh</p>
              <div className="icon">
              <h3><FaFacebook/></h3>
              <h3><FaGithub/></h3>
              <h3><FaYoutube/></h3>
              <h3><FaLinkedin/></h3>
              </div>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} GEDGET FIX | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
    );
};

export default Footer;