import { Button,Badge } from 'react-bootstrap';
import React, { useContext } from 'react';
import { Nav,Navbar,Container } from 'react-bootstrap';
import { cartstore } from '../App';
const Navigation = () => {
  const[cart,setCart,showcart,setShowcart,login,setLogin]=useContext(cartstore);
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark" fixed='top'>
        <Container>
          <Navbar.Brand href="/home"><img src='http://www.magicwebgravy.com/wp-content/uploads/2014/12/image-ecommerce-2013.jpg' alt='e-com' style={{width:'1cm',height:'1cm'}}/></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            {console.log(login)}
            {login && <Nav.Link href="/store">Store</Nav.Link>}
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
          <Button variant='success'onClick={(event)=>{setShowcart(!showcart);console.log(showcart)}}>Cart <Badge bg="warning" text="dark">{cart.length}
      </Badge></Button>
        </Container>
      </Navbar>
  </div>
  )
}

export default Navigation;