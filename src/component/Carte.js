import React from 'react';
import {Card,Button} from 'react-bootstrap';

function Carte({contact}) {
    console.log(contact);
  return <div >
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLtwcGm4AQnPv_n8iVk6Il1D4Uoh76CAapTg&usqp=CAU" />
  <Card.Body>
    <Card.Title>{contact.name} </Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
  </div>;
}

export default Carte;