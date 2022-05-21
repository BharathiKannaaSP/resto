import React from 'react'
import {Carousel} from 'react-bootstrap'

import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function Contact() {
  const navigate=useNavigate()
  return (
    <div>
      <Navbar/>
      <h1 style={{paddingTop:'60px',backgroundColor:'rgba(0,0,0,.1'}}>Our Branches</h1>
      <section>
      <Carousel fade >
  
  <Carousel.Item>
  <img
      className="d-block w-100"
      style={{backgroundColor:'black'}}
      src='https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' height='750px' alt='contactimg'
      />
    <Carousel.Caption>
      <h1>Bangalore</h1>
      <p> Krishna Rajendra Rd, New Tharagupet, Bengaluru, Karnataka 560002.</p>
      <button onClick={()=>navigate('/menu')}> Let's Order Now! </button>

    </Carousel.Caption>
  </Carousel.Item>
  
  <Carousel.Item>
  <img
      className="d-block w-100"
      style={{backgroundColor:'black'}}
      src='https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' height='750px' alt='contactimg' 
      />

    <Carousel.Caption>
      <h1>New Delhi</h1>
      <p> Ashoka Hotel in the Chanakyapuri diplomatic area, New Delhi, Delhi 110023</p>
      <button onClick={()=>navigate('/menu')}> Let's Order Now! </button>

    </Carousel.Caption>
  </Carousel.Item>
  
  <Carousel.Item>
    <img
      className="d-block w-100"
      style={{backgroundColor:'black'}}
      src='https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' height='750px' alt='contactimg' 
      />

    <Carousel.Caption>
      <h1>Chennai</h1>
      <p>38, Santhome High Rd, Mylapore, Chennai, Tamil Nadu 600004</p>
      <button onClick={()=>navigate('/menu')}> Let's Order Now! </button>
    </Carousel.Caption>

  </Carousel.Item>
</Carousel>
      </section>
      <Footer/>
    </div>
  )
}

export default Contact