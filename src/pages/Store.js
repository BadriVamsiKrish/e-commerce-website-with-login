import React from 'react'
//import {Card,Button} from 'react-bootstrap';
import Card from '../layout/Cardelement';
import { Button } from 'react-bootstrap';
import { useContext } from 'react';
import { cartstore } from '../App';
const Store = () => {
  const[cart,setCart,showcart,setShowcart,login,setLogin]=useContext(cartstore);
  const productsArr = [

    {
    
    title: 'Colors',
    
    price: 100,
    
    imageUrl:'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    },
    
    {
    
    title:'Black and white Colors',
    
    price: 50,
    
    imageUrl:'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    },
    
    {
    
    title:'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl:'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    },
    
    {
    
    title:'Blue Color',
    
    price: 100,
    
    imageUrl:'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    
    }
    
    ]
  return (<div>
    <h1 style={{color:'white',background:'gray',padding:'20px',fontSize:'50px',fontFamily:'revert'}}><center>The Generics</center></h1>
    <h2 style={{textAlign:'center'}}>Store <Button variant='success' onClick={(event)=>{setLogin(false);localStorage.removeItem('login')}}>logout</Button></h2>
          <div style={{display:'grid',
            gridTemplateColumns:'repeat(2, 1fr)',
            gap:'20px'}}>
            {productsArr.map((item, index) => (
          <Card key={index} url={productsArr[index].imageUrl} title={item.title} price={item.price}  />
        ))}

          </div>
          </div>
  )
}

export default Store