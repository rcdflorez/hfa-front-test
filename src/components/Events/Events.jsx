import { Container } from 'react-bootstrap'
import './Events.scss'
import { Link } from 'react-router-dom'

const Events = () => {

  return (
    <section className='events'>
      <Container className='d-md-flex justify-content-end'>
        <div className="events_content">
            <>
              <p>
                Join us for the Q1 FY2023 Investor Update to 
                discuss performance and strategy. 
                Q&A to follow.
              </p>
              <h3>Investor <br />Update</h3>
              <Link to="/events">
                <p className='events_code'>Q1 FY 2023</p>
              </Link>
              <span></span>
            </>
        </div>
      </Container>
    </section>
  )
}

export default Events