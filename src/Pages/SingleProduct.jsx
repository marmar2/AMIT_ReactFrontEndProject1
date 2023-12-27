import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { BsCart3 } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import {cartslice} from '../Redux/CartSlice'

export default function SingleProduct() {

  const x= useParams();
  const {id} = x;  

   const [SingleProduct, setSingleProduct] = useState ([]);

  useEffect(()=>{
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res)=>{setSingleProduct(res.data)}).catch((err) => console.log(err));
  });

  const dispatch = useDispatch();

  return (
    <>
    
    <div className='Container' >
      <div><img src={SingleProduct.image} alt=""/></div>
      <div>
        <h1>{SingleProduct.title}</h1>
        <h1>{SingleProduct.price}</h1>
        <p>{SingleProduct.description}</p>
        <button onClick={()=> dispatch(cartslice.actions.addToCart(SingleProduct))}><BsCart3/> Add to Cart</button>
      </div>


    </div>
    
    
    
    </>
  )
}
