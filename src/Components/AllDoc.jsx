import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Row, Col } from 'react-bootstrap'
import DocCard from './DocCard'




function AllDoc() {
  const base_url = 'https://doctor-backend-4fzr.onrender.com/doctors'

  const [AllDocData, setAllDocData] = useState([])

  const fetchData = async() => {
    const result = await axios.get(base_url)
    console.log(result.data);
    setAllDocData(result.data)
  }

  console.log(AllDocData);

  useEffect(() => {
    fetchData()
  },[])

  return (
    <div>
      <img width={'100%'} src="https://www.mobifilia.com/wp-content/uploads/2018/11/Healthcare-transform-Banner.jpg" alt="" />

      <div className="container">
        <div className="row">
          <div className="col-5">
            <img style={{ marginTop: '35px', marginBottom: '35px' }} width={'100%'} src="https://cdn.dribbble.com/users/5325312/screenshots/14628437/media/53f823b403d58a67399cd6f3beac4d41.gif" alt="" />
          </div>
          <div style={{ textAlign: 'center', padding: '15px', marginTop: '80px' }} className="col-7">
            <p className='text-danger'>EASY - SAFE - AFFORDABLE</p>
            <h2 className='text-success'><b>Telemedicine</b></h2>
            <p style={{ textAlign: 'justify' }}>Telehealth is the distribution of health-related services and information via electronic information and telecommunication technologies. It allows long-distance patient and clinician contact, care, advice, reminders, education, intervention, monitoring, and remote admissions.</p>
            <button className='btn btn-outline-primary mt-4'>Read More</button>
          </div>
        </div>
      </div>
      <div className="container">
        <h2 className='text-primary text-center mt-5 mb-4' style={{ textDecoration: 'underline' }}>Our Best Doctors</h2>
        <Row>
          {
            AllDocData.map(item => (
              <Col sm={12} md={6} lg={4} xl={3}>
                <DocCard doctors={item} />
              </Col>
            ))
          }
        </Row>
      </div>
    </div>
  )
}

export default AllDoc