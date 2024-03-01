import "./Footer.scss";
import logo from "../../assets/logo_hive.webp";
import { Container } from "react-bootstrap";
import IconLocation from "../../assets/icons/location-dot-solid.svg";
import IconLinkedId from "../../assets/icons/linkedin.webp";

const Footer = () => {
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
                3340 Peachtree Rd NE Suite 1275 <br></br> Atlanta, Georgia
                United States
              </p>
            </div>
            <div className="contact social">
              <a
                href="https://www.linkedin.com/company/hive-financial-assets/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={IconLinkedId} alt="" />
                <p>Hive Financial Assets</p>
              </a>
            </div>
          </div>
          <form className="footer_data_form">
            <input
              type="text"
              name="form-email"
              id="form-email"
              placeholder="Your email"
            />
            <input
              type="text"
              name="form-name"
              id="form-name"
              placeholder="Your name"
            />

            <textarea
              name="form-message"
              id="form-message"
              rows="5"
              placeholder="Your message"
            ></textarea>
            <button>SEND YOUR MESSAGE</button>
          </form>
        </section>
        <p className="footer_copy">
          COPYRIGHT © 2024 HIVE FINANCIAL ASSETS - ALL RIGHTS RESERVED.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
