import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col,Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup';
import DocOp from './DocOp';
import DocReview from './DocReview'


function ViewDoc() {

  const [DocDetails,setDocDetails]=useState({})


  const {id} = useParams()
  console.log(id);

  const base_url = 'https://doctor-backend-4fzr.onrender.com/doctors'

  const fetchDoc=async()=>{
    const result =await axios.get(`${base_url}/${id}`)
    console.log(result.data);
    setDocDetails(result.data)
  }

  console.log(DocDetails);

  useEffect(()=>{
    fetchDoc()
  },[])
  return (
    <div>
      <Row>
        <Col className='p-5'>
        <img width={'100%'} src="https://findado.osteopathic.org/wp-content/uploads/2021/08/GettyImages-1214206519.jpg" alt="" />
        </Col>
        <Col>
        <div className='container my-5 p-5'>
        <ListGroup>
      <ListGroup.Item><h3 className='text-primary'>{DocDetails.name}</h3>({DocDetails.specialty})</ListGroup.Item>
      <ListGroup.Item> Hospital : <b>{DocDetails.hospital}</b></ListGroup.Item>
      <ListGroup.Item>Address : <b>{DocDetails.address}</b></ListGroup.Item>
      <ListGroup.Item>Email : <b>{DocDetails.email}</b></ListGroup.Item>
      <ListGroup.Item>Phone : <b>{DocDetails.phone}</b></ListGroup.Item>
      <ListGroup.Item>Available days : <b>{DocDetails.available_days?.join(' | ')}</b></ListGroup.Item>
      <ListGroup.Item>Available Hours : <b>{DocDetails.available_hours}</b></ListGroup.Item>
      <ListGroup.Item><DocReview review={DocDetails.reviews}/></ListGroup.Item>
    </ListGroup>
        </div>
        </Col>
      </Row>
    </div>
  )
}

export default ViewDoc