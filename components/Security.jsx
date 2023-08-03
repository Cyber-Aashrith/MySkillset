import React from "react";
import "../styles/globals.css";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Image from "next/image";


const Security = () => {
  return (
    <Carousel>
      <Carousel.Item interval={3000} align="center">
    <Card style={{ width: '18rem' }} align="center">
      <Image variant="top" src="/images/google.png" className="mx-auto" width={"230"} height={"230"}/>
      <hr />
      <Card.Body>
        <Card.Title>Google OAuth 2.0</Card.Title>
        <Card.Text className="Card-text">
          Google OAuth authentication flows the Google APIs support. The Google APIs...
        </Card.Text>
        <Button href="https://developers.google.com/identity/protocols/oauth2" variant="outline-primary">Read About</Button>
      </Card.Body>
    </Card>
      </Carousel.Item>
      <Carousel.Item interval={3000} align="center">
        <Card style={{ width: '18rem' }} align="center">
      <Image variant="top" src="/images/passportjs.png" className="mx-auto" width={"230"} height={"230"} />
      <hr />
      <Card.Body>
        <Card.Title>Passportjs</Card.Title>
        <Card.Text className="Card-text">
        Passport is authentication middleware for Node.js. Extremely flexible and modular... 
        </Card.Text>
        <Button variant="outline-success">Read About</Button>
      </Card.Body>
    </Card>
      </Carousel.Item>
    </Carousel>
  )
}

export default Security