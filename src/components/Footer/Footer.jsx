import "./Footer.scss";
import logo from "../../assets/logo_hive.webp";
import { Container } from "react-bootstrap";
import IconLocation from "../../assets/icons/location-dot-solid.svg";
import IconLinkedId from "../../assets/icons/linkedin.webp";
import { sendCustomEmail } from "./EmailService";

import React, { useState } from "react";

const Footer = () => {
  const [details, setDetails] = useState({
    name: "",
    message: "",
    to_email: "",
  });

  const handleDetailsChange = (event) => {
    const { name, value } = event.target;

    console.log(name);

    setDetails((prevDetails) => {
      return {
        ...prevDetails,
        [name]: value,
      };
    });
  };

  const handleSendEmail = () => {
    //alert("tales");
    sendCustomEmail(details);
  };

  return (
    <footer className="footer">
      <Container>
        <aside className="footer_logo">
          <img src={logo} alt="" />
        </aside>

        <section className="footer_data">
          <div className="footer_data_social_network">
            <div className="contact location">
              <img src={IconLocation} alt="" />
              <p>
                3340 Peachtree Rd NE Suite 350 <br></br> Atlanta, Georgia United
                States
              </p>
            </div>
            <div className="contact social">
              <a
                href="https://www.linkedin.com/company/hive-financial-assets/about/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={IconLinkedId} alt="" />
                <p>Hive Financial Assets</p>
              </a>
            </div>
          </div>
          <div className="footer_data_form">
            <input
              type="email"
              name="to_email"
              id="form-email"
              placeholder="Your email"
              value={details.to_email}
              onChange={handleDetailsChange}
            />
            <input
              type="text"
              name="name"
              id="form-name"
              placeholder="Your name"
              value={details.name}
              onChange={handleDetailsChange}
            />

            <textarea
              name="message"
              id="form-message"
              rows="5"
              placeholder="Your message"
              value={details.message}
              onChange={handleDetailsChange}
            ></textarea>
            <button
              disabled={!details.to_email || !details.name || !details.message}
              onClick={handleSendEmail}
            >
              SEND YOUR MESSAGE
            </button>
          </div>
        </section>
        <p className="footer_copy">
          COPYRIGHT © 2024 HIVE FINANCIAL ASSETS - ALL RIGHTS RESERVED.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
