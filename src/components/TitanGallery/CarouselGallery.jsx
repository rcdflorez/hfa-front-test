/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const CarouselGallery = ({images, indexCarousel}) => {
  const [index, setIndex] = useState(indexCarousel);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  useEffect(()=>{},[])

  return (
    <Carousel fade activeIndex={index} onSelect={handleSelect} indicators={false}>
      {images.map((image, i)=>
        <Carousel.Item key={i}>
          <img
            className="d-block w-100"
            src={image}
            alt="Titan carousel"
          />
        </Carousel.Item>
      )}
    </Carousel>
  )
}

export default CarouselGallery