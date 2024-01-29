import { Container } from 'react-bootstrap'
import './WhiteSection.scss'
import image from '../../assets/images/WHY.webp'
const WhiteSection = () => {
  return (
    <Container className='white_section mt-5 d-flex flex-column flex-md-row justify-content-center align-items-center'>
      <div className="Why-logo">
        <img src={image} alt="" style={{width: "223px"}}/>
      </div>
      <div className="content">
        <h3>CONSISTENCY, EXPERIENCE, ANALYTICS</h3>
        <p>Hive prides itself in planning for the extreme long term, providing consistent returns through a deep analytics approach combined with seasoned team members.</p>
      </div>
    </Container>
  )
}

export default WhiteSection