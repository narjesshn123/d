import React from 'react'
import styles from './AmazingSingle.style.module.css'
import { WithSpinners } from '../../components/WithSpinner/WithSpinner'
import { getuser } from '../../api/Products.api'
import { useDispatch } from 'react-redux'
import { addtoCart } from '../../redux/reducers/Cart.reducer'
const AmazingSingle = ({product}) => {
  const dispatch = useDispatch(); 
  const handleAddtoCart = (user) =>{
    dispatch(addtoCart(user))
    // console.log(user+ "userrrrrrrrrrrrrr");
  }  
  return (
    <div className={styles.AmazingSingle}>
      <div className={styles.details}>
      <div className={styles.big_img}>
      <img src={product.pic} alt=""/>  
      </div>         
      <div className={styles.box}>
      <div className={styles.row}>
          <h2>{product.tittle}</h2>
        <p>{product.description}</p>
        <p>{product.content}</p>
        <span>{product.price}</span>

        </div>
       
        {/* <div className={styles.thumb}>
          <img 
          src={product.pic} 
          alt=""/>       
        </div> */}
        <button onClick={(()=>handleAddtoCart(product))}  className={styles.cart}>Add to cart</button>
        </div>   
      </div>
      
    </div>
  )
}

export default WithSpinners(AmazingSingle, getuser)
