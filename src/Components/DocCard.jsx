import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function DocCard({doctors}) {
  console.log(doctors);
  return (
    <div>
        <Card style={{ width: '18rem' , margin:'20px' , height:'25rem' , textAlign:'center' } }>
                <Card.Img variant="top" src="https://findado.osteopathic.org/wp-content/uploads/2021/08/GettyImages-1214206519.jpg" />
                <Card.Body style={{padding:'20px'}}>
                  <Card.Title style={{fontSize:'15px'}}>NAME : {doctors.name}</Card.Title>
                  <Card.Text>
                  ( {doctors.specialty} )
                  <h6>HOSPITAL : {doctors.hospital}</h6>
                  <p>Rating⭐:{doctors.rating}</p>
                  </Card.Text>
                  <Link to={`view/${doctors.id}`}>
                  <Button variant="primary">View</Button>
                  </Link>
                </Card.Body>
              </Card>
    </div>
  )
}

export default DocCard