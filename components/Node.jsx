import React from 'react'
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import Image from "next/image";


const Node = () => {
  return (
    <Card style={{ width: '18rem' }} align="center" className='mx-auto'>
       <a href="https://www.flaticon.com/free-icons/node-js" title="node js icons">
       <Image variant="top" src="/images/node-js.png" width={"230"} height={"230"} />
      </a>
      <hr />
      <Card.Body>
        <Card.Title>Node.js</Card.Title>
        <Card.Text className="Card-text">
        Node.js® is an open-source, cross-platform JavaScript runtime environment.
        </Card.Text>
        <Button variant="outline-success" href="https://nodejs.org/en">Read About</Button>
      </Card.Body>
    </Card>
  )
}

export default Node