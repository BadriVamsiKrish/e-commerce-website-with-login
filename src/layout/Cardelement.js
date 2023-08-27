// Card.js
import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { cartstore } from '../App';
const Card = ({ url, title,price }) => {
  const[cart,setCart,showcart,setShowcart]=useContext(cartstore);
  const addbtn = (a,b,c) =>{
    cart.push({'imageUrl':url,'price':price,'title':title,'quantity':1});
    setCart([...cart]);
    console.log(cart)
  } 
  return (
    <div className="card mb-3" style={{alignItems:'center',margin:'100px ,50px'}}>
      <img  style={{height:'5cm',width:'5cm'}} src={url} alt={title} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">Price:{price}</p>
        <Button onClick={(event)=>{addbtn(url,price,title)}}>Add</Button>
      </div>
    </div>
  );
};

export default Card;
