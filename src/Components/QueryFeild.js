import React from 'react'
import { Form, Row, Col } from 'react-bootstrap';
import '../styles/Cataloge.css';
// import data from '../data';
// import Card from './Card';
function QueryFeild() {
  return (
    <Row>
        <Col sm={12} md={6} xl={12}>
            <div className='Query'>
                <Form.Control type="search" placeholder='Search Your Query here...' onChange={(e)=>{
                  //  setQuery(e.target.value);
                   
                }}/>
                </div>
        </Col>
       
    </Row>
  )
}

export default QueryFeild

// data.filter(item=>item.productName.toLowerCase().includes(e.target.value))