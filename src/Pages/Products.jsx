import axios from 'axios';
import React, {  Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import ProductsStyles from '../Styles/ProductsStyles.module.scss'
import {cartslice} from '../Redux/CartSlice'
import { useDispatch } from 'react-redux';


export default function Products() {

  const [Products, setProducts] = useState([]);

  useEffect(()=> {
 
   axios.get(`https://fakestoreapi.com/products`).then((res)=>{setProducts(res.data)}).catch((err) => console.log(err));
 
  });

  const dispatch = useDispatch();


  return (
    
    <>
      {/* <h1 className='Tittle'>Our Products</h1> */}
     
      <div className={ProductsStyles.container}>
      
         <div className={ProductsStyles.allProducts}>
           {
            
               Products.map((el,idx) => (
                 <div className={ProductsStyles.product} key={idx}>
                   
                     <Link to={`${el.id}`}><img src={el.image} alt=""/></Link> 
                     <h6>{el.title}</h6>
                     <h6 className='price'>{`$${el.price}`}</h6>
                     <p>{`Rating ${el.rating.rate}/5`}</p>
                     <p>{`Stock: ${el.rating.count}`}</p>
                     <button onClick={()=> dispatch(cartslice.actions.addToCart(el))}>Add To Cart</button>
                    
                 </div>
             ))
             
           }
         </div>
      </div>   

        
    </>
  )
}
