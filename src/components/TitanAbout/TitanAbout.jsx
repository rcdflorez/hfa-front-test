/* eslint-disable react/prop-types */
import './TitanAbout.scss'
import { FaPlus } from "react-icons/fa";

const TitanAbout = ({data, className}) => {
  
  return (
    <article className={'titan_about_article ' + className}>
      <div className="about_container">
        <h3 className='titan_about_article_title'>ABOUT</h3>
        <aside className='titan_about_article_image'>
          <img src={data.custom_fields.about_titan_logo} alt="" />
        </aside>
        <p className='titan_about_article_description'>{data.custom_fields.about_titan_description}</p>
        <a className='titan_about_article_icon'
          href={data.custom_fields.about_titan_link} 
          target="_blank" rel="noopener noreferrer">
          <aside >
            <FaPlus />
          </aside>
        </a>
      </div>
    </article>
  )
}

export default TitanAbout