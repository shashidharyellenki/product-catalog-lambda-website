import React, { useState } from "react";
import data from '../data';
import { Form, Row, Col } from 'react-bootstrap'
import { Link } from "react-router-dom";
import Product from "./Product";
export default function Card(){
const [query, setQuery] = useState([])
return(
<div>
    {/* Search function */}
<Row>

    <Col sm={12} xl={12}>
        <div className='Query'>
            <Form.Control type="search" placeholder='Search Your Query here...' onChange={(e)=>{
               setQuery(e.target.value);
            }}/>
        </div>
            
    </Col>
    
</Row>


{/* {data.map(item=>query.push(item))} */}

{/* Display funciton */}
    <Row>
    <h1>latest Products</h1>
    <div className="flex">
              <h6> <Link to={'/cart'}>Cart</Link></h6>
              <h6><Link to={'/Admin'}>Admin Pannel</Link></h6>
            </div>
        {data.filter(item=>item.productName.toLowerCase().includes(query)).map(product=>{
            return(
                <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
                   <Product product={product} Item={product}/>
                </Col>
            )
        })}
    </Row>
  
</div>

)
    
}
