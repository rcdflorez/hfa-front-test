import { Container } from 'react-bootstrap'
import './Team.scss'
import { useContextGlobal } from '../../context/global.context'
import CardsTeam from '../../components/CardsTeam/CardsTeam'
import { useEffect } from 'react'

const Team = () => {
  const {state} = useContextGlobal()
  const params = new URLSearchParams(window.location.search)

  useEffect(()=>{
    if(params.get('id')){
      const userArticle = document.getElementById(`user-${params.get('id')}`);
      if (userArticle) {
        const elementPosition = userArticle.getBoundingClientRect().top;
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        const offset = (elementPosition + scrollPosition) - 150;
        window.scrollTo({
          top: offset,
          behavior: 'smooth'
        });
      }
    }else{
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  })

  return (
    <Container className="team-page">
      <h3 className='team-page_title'>MEET THE TEAM</h3>

      <section className='container-team'>
        {state.team &&
          state.team.map((user, index) => 
          <CardsTeam 
            key={user.id} 
            user={user}
            className={`${index % 2 === 0 ? "" : "card_end"}`}
          />)
        }
      </section>

    </Container>
  )
}

export default Team