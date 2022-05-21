import React from 'react'
import { useNavigate } from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai'
import {Navbar,Container,Nav,NavDropdown,Form,FormControl, Button  } from 'react-bootstrap'
function Navbars(){ 

 
  //react-router-dom-->navigate

  const navigate=useNavigate()
  const handleLogout=()=>{
    alert("Logged out! Thank you Come Again")
    navigate('/')
  }
  
  return(
   <> 
  {/* navbar in bootstrap */}
   
<Navbar fixed='top' style={{backgroundColor:'rgba(0,0,0,.1)',height:'60px'}} variant='dark' expand="lg">
  <Container fluid>
  <img style={{borderRadius:'50%'}} width={45} height={45} src='https://images-platform.99static.com/hi04QQRp8-wNDZxO5MJXc_Eee7c=/224x748:792x1316/500x500/top/smart/99designs-contests-attachments/92/92019/attachment_92019603' alt='logo'/>
    <Navbar.Brand href="#">Resto</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link  onClick={()=>navigate('/home')}>Home</Nav.Link>
        <NavDropdown title="Menu" id="navbarScrollingDropdown">
          <NavDropdown.Item  onClick={()=>navigate('/menu')}>Main Dishes</NavDropdown.Item>
          <NavDropdown.Item  onClick={()=>navigate('/starters')}>Starters</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item  onClick={()=>navigate('/ice-drinks')}>
            Ice Creams & Drinks
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link  onClick={()=>navigate('/contact')}>Contact</Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          style={{marginTop:'20px'}}
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
      <AiOutlineSearch size={35} color="green" style={{marginTop:'25px' ,cursor:'pointer'}} className='search'/>        
      </Form>
      <Nav.Link  style={{color:'gray'}} onClick={()=>navigate('/about')}>User Profile</Nav.Link>
      <Button variant='outline-danger' onClick={handleLogout}>Logout</Button >

    </Navbar.Collapse>
  </Container>
</Navbar>
</>
)}
export default Navbars