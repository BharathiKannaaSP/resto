import React from 'react'
import {Carousel} from 'react-bootstrap'

import video1 from '../assets/Slider 1.mp4'
import video2 from '../assets/video.mp4'
import video3 from '../assets/meal.mp4'
import { useNavigate } from 'react-router-dom'

function Slider() {
  const navigate=useNavigate()
  return (
    <div>

      <section>
      <Carousel fade >
  
  <Carousel.Item>
  <video
      className="d-block w-100"
      style={{backgroundColor:'black'}}
      src={video1} height='750px' autoPlay muted loop
      />
    <Carousel.Caption>
      <h1>Resto</h1>
      <p>Life's too short for boring food.</p>
    </Carousel.Caption>
  </Carousel.Item>
  
  <Carousel.Item>
  <video
      className="d-block w-100"
      style={{backgroundColor:'black'}}
      src={video2} height='750px' autoPlay muted loop
      />

    <Carousel.Caption>
      <h1>More flavor for less.</h1>
      <p>Bringing class to cuisine. Foodies welcome here. Something hot. Something tasty.</p>
    </Carousel.Caption>
  </Carousel.Item>
  
  <Carousel.Item>
    <video
      className="d-block w-100"
      style={{backgroundColor:'black'}}
      src={video3} height='750px' autoPlay muted loop
      />

    <Carousel.Caption>
      <h1>Enjoy with your loved ones! </h1>
      <p>Order online,Food @ your DoorStep</p>
      <button onClick={()=>navigate('/menu')}> Let's Order Now! </button>
    </Carousel.Caption>

  </Carousel.Item>
</Carousel>
      </section>
    </div>
  )
}

export default Slider