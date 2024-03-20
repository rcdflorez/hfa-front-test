import { Container } from "react-bootstrap";
import "./Events.scss";
import { Link } from "react-router-dom";

const Events = () => {
  return (
    <section className="events">
      <Container className="d-md-flex justify-content-end">
        <div className="events_content">
          <>
            <p>
              Join us for the Q4 FY2023 Investor Update to discuss performance
              and strategy. Q&A to follow.
            </p>
            <h3>
              Investor <br />
              Update
            </h3>
            <Link to="https://q4-fy2023-investor-update-full-video.hivefinancialassets.com/">
              <p className="events_code">Q4 FY 2023</p>
            </Link>
            <span></span>
          </>
        </div>
      </Container>
    </section>
  );
};

export default Events;
