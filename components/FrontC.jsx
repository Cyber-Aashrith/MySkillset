import React from "react";
import "../styles/globals.css";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Image from "next/image";




function FrontC() {
  return (
    <Carousel>
      <Carousel.Item interval={3000} align="center">
    <Card style={{ width: '18rem' }} align="center">
      <a href="https://www.flaticon.com/free-icons/html-5" title="html 5 icons">
       <Image variant="top" src="/images/html-5.png" width={"230"} height={"230"} />
      </a>
      <hr />
      <Card.Body>
        <Card.Title>HTML</Card.Title>
        <Card.Text className="Card-text">
        HTML (HyperText Markup Language) is the most basic building block of...
        </Card.Text>
        <Button variant="outline-dark" className="html-btn" href="https://developer.mozilla.org/en-US/docs/Web/HTML">Read About</Button>
      </Card.Body>
    </Card>
      </Carousel.Item>

      <Carousel.Item interval={3000} align="center">
        <Card style={{ width: '18rem' }} align="center">
        <a href="https://www.flaticon.com/free-icons/css" title="css icons">
      <Image variant="top" src="/images/css-3.png" width={"230"} height={"230"} />
        </a>
        <hr />
      <Card.Body>
        <Card.Title>CSS</Card.Title>
        <Card.Text className="Card-text">
        Cascading Style Sheets (CSS) is a stylesheet language used to describe... 
        </Card.Text>
        <Button variant="outline-primary" href="https://developer.mozilla.org/en-US/docs/Web/CSS">Read About</Button>
      </Card.Body>
    </Card>
      </Carousel.Item>
    </Carousel>
  );
}


export default FrontC;