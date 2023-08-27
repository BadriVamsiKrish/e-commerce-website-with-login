import React from 'react'
import { Button, Form } from 'react-bootstrap';
const Contact = () => {
  return (
    <div>

      <center style={{paddingTop:'20px'}}><h2>Contact us</h2></center>
      <Form style={{padding:'50px',border:'groove',margin:'30px 50px'}}>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="user name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="number" placeholder="phone number" />
      </Form.Group>
      <div className="d-grid gap-2">
      <Button variant="primary" size="lg">
        Send
      </Button>
    </div>
    </Form>
    </div>
  )
}

export default Contact