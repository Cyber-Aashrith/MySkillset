import React from "react";
import "../styles/globals.css";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Image from "next/image";

function FullStackC() {
  return (
    <Carousel>
          <Carousel.Item interval={3000} align="center" className="item">
         <Card style={{ width: '18rem' }} align="center">
      <Image variant="top" src="/images/js.png" className="mx-auto" width={"230"} height={"230"}/>
         <hr />
         <Card.Body>
        <Card.Title>JavaScript</Card.Title>
        <Card.Text className="Card-text">
        JavaScript (JS) is a lightweight interpreted (or just-in-time compiled) programming...
        </Card.Text>
        <Button variant="outline-warning">Read About</Button>
      </Card.Body>
    </Card>
      </Carousel.Item>

    <Carousel.Item interval={3000} align="center" className="item">
      <Card style={{ width: '18rem' }} align="center">
    <Image variant="top" src="/images/reactjs.png" className="mx-auto" width={"230"} height={"230"} />
    <hr />
    <Card.Body>
      <Card.Title>Reactjs</Card.Title>
      <Card.Text className="Card-text">
      React lets you build user interfaces out of individual pieces... 
      </Card.Text>
      <Button href="https://react.dev/" variant="outline-info">read About</Button>
    </Card.Body>
  </Card>
    </Carousel.Item>

    <Carousel.Item interval={3000} align="center" className="item">
       <Card style={{ width: '18rem' }} align="center">
    <Image variant="top" src="/images/nextjs.png" className="mx-auto" width={"230"} height={"230"}/>
    <hr />
    <Card.Body>
      <Card.Title>Nextjs</Card.Title>
      <Card.Text className="Card-text">
      Next.js enables you to create full-stack Web applications by...
      </Card.Text>
      <Button href="https://nextjs.org/" variant="outline-dark">read About</Button>
    </Card.Body>
  </Card>
    </Carousel.Item>
  </Carousel>
  );
}

export default FullStackC;