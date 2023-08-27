import React from 'react';
import { cartstore } from '../App';
import { Button,Table } from 'react-bootstrap';
import { ReactDOM } from 'react';
const Addcart = () => {
  const[cart,setCart,showcart,setShowcart]=React.useContext(cartstore);
  const totalPrice = cart.reduce((sum, item) => sum + (item.price)*(item.quantity), 0);

  const removeHandler = (ite) => {
    const res=cart.filter((item)=>item !== ite);
    console.log(res);
     setCart([...res]);
  }
  return(
    <div>
      <h2><center>Cart</center></h2>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>item Title</th>
          <th>Price</th>
          <th>quantity</th>
          <th>action</th>
        </tr>
      </thead>
      <tbody>{console.log(cart)}
      {cart.map((item,index)=>{return(<tr>
          <td><img src={item.imageUrl} alt='img' style={{height:'2cm',width:'2cm'}}/>{item.title}</td>
          <td>{item.price}</td>
          <td><Button onClick={(event)=>{item.quantity++;console.log(item);setCart([...cart])}}>+</Button>{parseInt(item.quantity)}<Button onClick={(event)=>{if(item.quantity--==1){removeHandler(item)}else{setCart([...cart])};}}>-</Button></td>
          <td><Button variant='danger'onClick={(event)=>removeHandler(item)}>Remove</Button></td>
        </tr>)})}
        
      </tbody>
    </Table>
    <h2>Total:{totalPrice}</h2>
  
    </div>
  )
}


export default Addcart;