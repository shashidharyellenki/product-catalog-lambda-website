import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom';

import { Container, ListGroup } from 'react-bootstrap'
export default function AdminPannel() {
  const [Adata,setData]=useState([])
  const parsedData = [];
  let GrandTotal=0;
 
  useEffect(()=>{
    const getData = async ()=>{
      const responseData = await axios.get("https://fpv1ifj2og.execute-api.ap-south-1.amazonaws.com/production/");
      setData(responseData.data);
    }
    getData();
  },[]);

// pars ing the items
  Adata.map(item=>{
     parsedData.push(JSON.parse(item['Items']));
    GrandTotal = item['GrandTotal']
    
  })
  // converting 2d array to 1d array using spread operator 
let result=[].concat(...parsedData);


  return (
    <Container className='mt-5'>
       <h1>Orders</h1>
       <Link to='/'>Back</Link>
    <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Product Name</th>
            <th scope='col'>Product Image</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        
        <tbody>
       {   result.map((item,index)=>{
            return(
                  <tr className='table-active' key={index}>
                    <td>{item.productName}</td>
                    <td ><img src={item.Image} style={{height:'3rem', borderRadius:'2px'}} alt={item.productName}/></td>
                    <td>{item.quantity}</td>
                    <td>{item.price}</td>
                  </tr>
            )
          })
        }
        
      

        </tbody>
    </table>
   
    </Container>
  )
}
// parsedData.map(item=>{
  //   item.map(e=>{
  //     console.log("e",e['productName'])
  //   })
  // })