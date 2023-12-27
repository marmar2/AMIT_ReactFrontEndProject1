import { useSelector } from 'react-redux'
import { Link} from 'react-router-dom';
import {cartslice} from '../Redux/CartSlice'
import { useDispatch } from 'react-redux';
import ProductsStyles from '../Styles/ProductsStyles.module.scss'


export default function Cart() {

  const cartProducts = useSelector((state)=>state.cartt.items)
  const TotalPrice = useSelector((state)=>state.cartt.totalPrice)
//   const cartProducts = useSelector((el)=>el.cartt.items)
  const dispatch = useDispatch();

//   const newArr = cartProducts.filter((value, index, self)=> 
//     index === self.findIndex((t) => (t.id === value.id))
//   )

  return (
    <>
   <div className={ProductsStyles.container}>
         <div className={ProductsStyles.allProducts}>
           {
            
               cartProducts?.map((el,idx) => (
                 <div className={ProductsStyles.product} key={idx}>
                   
                   <Link to={`${el.id}`}><img src={el.image} alt=""/></Link> 
                     <h6>{el.title}</h6>
                     <h6>{`$${el.price}`}</h6>
                     <p>{`left in store ${el.rating.count}`}</p>
                     <p>{` ${el.rating.rate}`}</p>
                     <button onClick={()=> dispatch(cartslice.actions.removeFromCart(idx))}>Remove from cart</button>
              
                 </div>
             ))
             
           }
         </div>
         <h2>{`Total Price is ${TotalPrice}`}</h2>
        </div> 

       
    </>
  )
}
