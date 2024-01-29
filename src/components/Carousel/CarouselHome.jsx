import Carousel from "react-bootstrap/Carousel";
import './CarouselHome.scss'
import Modal from 'react-bootstrap/Modal';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CarouselHome = () => {

  const [items, setItems] = useState(false)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const goPage = () =>{
    const section = document.getElementById('about-the-found');
    if (section) {
      const offset = section.offsetTop - 134;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  }

  useEffect(()=>{
    const env = import.meta.env
    fetch(
      `${env.VITE_CMS_BASE_URL}${env.VITE_CMS_API_URL}carousel`
    )
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setItems(json.sort((a, b) => a.id - b.id))
        // setItems([json[0]])
      });
  }, []) 

  return (
    <Carousel fade interval="4000">
      {items &&
        items.map((item, i)=>
          <Carousel.Item key={item.id}>
            <img
              className="d-block w-100"
              src={item.custom_fields.carousel_image[0]}
              alt="Slide carousel"
            />
            <Carousel.Caption 
              className={item.custom_fields.carousel_title[0].includes('TITAN') ? 'carousel-caption-3' : ''}>
              {item.custom_fields.carousel_title[0].includes('TITAN')
                ? <div className="titan_section">
                    
                    <p className="carousel_subtitle d-flex flex-column">
                      <span className="d-md-none">
                        <img src={item.custom_fields.carousel_icon_titan} alt="titan" />
                      </span>
                      {item.custom_fields.carousel_subtitle}
                    </p>
                    <h3
                      className="titan_title"
                      dangerouslySetInnerHTML={{__html: item.custom_fields.carousel_title}}>
                    </h3>

                    <p className="carousel_description">
                      {item.custom_fields.carousel_description}
                    </p>
                  </div>
                :<h3
                    className={i === 0 ? 'caption-1' : ''}
                    dangerouslySetInnerHTML={{__html: item.custom_fields.carousel_title}}>
                  </h3>
              }

              {item.custom_fields.carousel_btn_text[0].includes('VIDEO') 
                ?
                  <>
                    <p className={i === 0 ? 'caption-1' : ''} onClick={handleShow}>
                      {item.custom_fields.carousel_btn_text}
                    </p>
                    <Modal show={show} onHide={handleClose} centered size="lg">
                      <video 
                        src={item.custom_fields.carousel_video}
                        controls
                        autoPlay>
                      </video>
                    </Modal>
                  </>
                : 
                  <>
                  {item.custom_fields.carousel_title[0].includes('STORY') 
                    ? <p 
                        className={i === 0 ? 'caption-1' : ''} 
                        onClick={goPage}>
                        {item.custom_fields.carousel_btn_text}
                      </p>
                    : <>
                        { item.custom_fields.carousel_title[0].includes('TITAN')
                          ? 
                            <Link to="/titan-100">
                              <p >
                                {item.custom_fields.carousel_btn_text}
                              </p>
                            </Link>
                          : <p>
                              {item.custom_fields.carousel_btn_text} 
                            </p>
                        }
                      </>
                  }
                </>
              }

              
            </Carousel.Caption>
            
          </Carousel.Item>
        )
      }

    </Carousel>
  )
}

export default CarouselHome