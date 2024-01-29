/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import './TitanGallery.scss'
import CarouselGallery from './CarouselGallery';
const TitanGallery = ({images}) => {
  const list = images.split('\r\n').filter(i => i !== "")
  const [indexImage, setIndexImage] = useState(list.length -1)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
   
  
  const [indexCarousel, setIndexCarousel] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIndexImage(10);
      }else{
        setIndexImage(list.length -1);
      }
    };
  
    window.addEventListener("resize", handleResize);
  
  }, []);

  return (
    <section className="images_content">
      {list.slice(0, indexImage).map((image, i) => (
        <aside key={i} onClick={handleShow}>
          <img src={image} alt="" onClick={()=> setIndexCarousel(i)}/>
        </aside>
      ))}

      <Modal show={show} onHide={handleClose} centered size='xl' id="gallery-modal">
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body closeButton>
          <CarouselGallery images={list.slice(0, indexImage)} indexCarousel={indexCarousel}/>
        </Modal.Body>
      </Modal>
    </section>
  )
}

export default TitanGallery