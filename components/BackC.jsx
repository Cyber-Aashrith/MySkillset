import React from "react";
import "../styles/globals.css";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Image from "next/image";

function BackC() {
  return (
    <Carousel>
      <Carousel.Item interval={3000} align="center">
    <Card style={{ width: '18rem' }} align="center">
      <a href="https://www.mongodb.com/" title="mongoDB">
      <Image variant="top" src="/images/mongodb.png"  className="mx-auto" width={"230"} height={"230"}/>
      </a>
      <hr />
      <Card.Body>
        <Card.Title>MongoDB</Card.Title>
        <Card.Text className="Card-text">
        MongoDB is an open-source, document-oriented NoSQL database management...
        </Card.Text>
        <Button href="https://www.mongodb.com/"  variant="outline-success">Read about</Button>
      </Card.Body>
    </Card>
      </Carousel.Item>
      <Carousel.Item interval={3000} align="center">
        <Card style={{ width: '18rem' }} align="center">
      <Image variant="top" src="/images/expressjs.png"  className="mx-auto" width={"230"} height={"230"} />
      <hr />
      <Card.Body>
        <Card.Title>Express</Card.Title>
        <Card.Text className="Card-text">
        ExpressJS is a web application framework that provides you with a simple API...
        </Card.Text>
        <Button href="https://expressjs.com/" variant="outline-dark">Read About</Button>
      </Card.Body>
    </Card>
      </Carousel.Item>
      <Carousel.Item interval={3000} align="center">
         <Card style={{ width: '18rem' }} align="center">
      <Image variant="top" src="/images/mongoose.png" width={"230"} className="mx-auto" height={"230"}/>
      <hr />
      <Card.Body>
        <Card.Title>Mongoose</Card.Title>
        <Card.Text className="Card-text">
        Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. 
        </Card.Text>
        <Button href="https://mongoosejs.com/" variant="outline-danger">Read About</Button>
      </Card.Body>
    </Card>
      </Carousel.Item>
    </Carousel>
  );
}

export default BackC;