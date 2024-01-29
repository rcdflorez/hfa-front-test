import { Container } from 'react-bootstrap'
import './TeamHome.scss'
import UserCard from './UserCard'
import { useContextGlobal } from '../../context/global.context'
import { Link } from 'react-router-dom'

const TeamHome = () => {
  const {state} =useContextGlobal()
  const data = state.team
  return (
    <Container className='team_home'>
      <div className="team_home_container">
        <h3 className='title mb-3'>MEET THE TEAM</h3>
        <p className='content_data'>
          Hive’s team has decades of experience building lending,
          analytics, and investment firms.
        </p>
      </div>
      <div className="container-users d-flex flex-column flex-md-row">
        {data && 
          data.map((user) => 
            <UserCard 
              key={user.id} 
              user={user}
            />
          )
        }
      </div>
      <Link to="/team">
        <button>LEARN MORE</button>
      </Link>
    </Container>
  )
}

export default TeamHome