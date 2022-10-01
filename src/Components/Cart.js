import React from 'react'
import {useCart} from 'react-use-cart';
import {Button, Row, Col} from 'react-bootstrap';
import Badge  from 'react-bootstrap/Badge';
import {Link} from 'react-router-dom';
import "../styles/Cart.css";
import axios from 'axios';

function Cart() {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();

    
    if(isEmpty) return (
      <div className='pt-5'>
      <Link to={"/"} className="back" onClick={() => window.location.reload(false)}><h6>Back</h6></Link>
        <h1>bag is Empty</h1>
      </div>
    )
  return (
    <div className='pt-5'>
      <Link to={"/"} className="back"><h6>Back</h6></Link>
      <div className='bag-heading'>
        <h3 className='cart-bag'>My Bag </h3><Badge className='badge'>{totalUniqueItems}</Badge>
      </div>
     
        
  <table className="table table-hover">
  <thead>
    <tr>
      <th scope="col">Product Name</th>
      <th scope='col'>Product Image</th>
      <th scope="col">Quantity</th>
      <th scope="col">Price</th>
      <th scope="col">Add Quantity</th>
      <th scope="col">Decrement Quantity</th>
      <th scope="col">Delete Item</th>
    </tr>
  </thead>
  <tbody>
    
      {items.map((item, index)=>{
          return(
              <tr className='table-active' key={index}>
                  <td>{item.productName}</td>
                  <td ><img src={item.Image} style={{height:'3rem', borderRadius:'2px'}} alt={item.productName}/></td>
                  <td><strong><span style={{fontweight:'600'}}>{item.quantity}</span></strong></td>
                  <td>{item.itemTotal}</td>
                  <td><Button 
                  className='btn btn-success btn-sm'
                  onClick={()=>updateItemQuantity(item.id, item.quantity+1)}
                  >Add Quantity</Button></td>
                  <td><Button 
                  className='btn btn-warning btn-sm'
                  onClick={()=>updateItemQuantity(item.id, item.quantity-1)}
                  >Decrement Quantity</Button></td>
                  <td><Button
                   className='btn btn-danger btn-sm'
                   onClick={()=>removeItem(item.id)}
                   >Delete</Button></td>

              </tr>
          )
      })}
  </tbody>
  </table>
  <br/>
  <hr></hr>
      <Row >
          <Col className='sm={12} md={6} xl={12} cart-total'>
                <h2><em>Grand Total</em>- {cartTotal}</h2>
                
          </Col>
      </Row>
      <Row>
        <Col className='cart-total sm={6} md={6} xl={6}'>
            <Button className='btn btn-info' onClick={async()=>{
            await  axios.post("https://fpv1ifj2og.execute-api.ap-south-1.amazonaws.com/production/",{
              Items:JSON.stringify(items),
              GrandTotal:cartTotal
            })
            }
            }>Check out</Button> &nbsp;
            <Button className='btn btn-danger'
            onClick={()=>emptyCart()}
            >Clear cart</Button>
        </Col>
      </Row>
        
        
      

     
      
    </div>

  
  )
}

export default Cart