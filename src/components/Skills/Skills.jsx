import './Skills.scss'
import icon1 from '../../assets/images/skills/1.svg'
import icon2 from '../../assets/images/skills/2.svg'
import icon3 from '../../assets/images/skills/3.svg'
import SkillCard from './SkillCard'
import { useEffect, useState } from 'react'

const Skills = () => {

  const [skills, setSkills] =useState(false)

  useEffect(()=>{
    const env = import.meta.env
    const icons = [icon1, icon2, icon3]
    fetch(
      `${env.VITE_CMS_BASE_URL}${env.VITE_CMS_API_URL}skills`
    )
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        json.forEach((skill, i) => skill.icon = icons[i]);
        setSkills(json.sort((a, b) => a.id - b.id))
      });
  }, []) 

  return (
    <section className='skills'>
      <div className='skills_container d-flex flex-column'>
        {skills &&
          skills.map((card, index) => 
          <SkillCard 
            key={card.id} 
            data={card}
            className={`${index % 2 === 0 ? "" : "card_end"}`}
          />
        )}
      </div>
    </section>
  )
}

export default Skills