import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import './Products.css'
// const Products = (props) => {
const Products = ({handleAddToCart, product}) => {
  // const {handleAddToCart, product} = props;

    const {img, name, ratingsCount, price, quantity, ratings, seller, shipping, stock} = product;
    
    return (
        <div className='product'>
             <img src={img} alt="" />
           <div className='product-info'>
              <h2 className='product-name'>Ultraboost 22 Shoes{name}</h2>
              <h3>Price ${price} </h3>
              <h4>Manufacturer : Addidas{shipping}</h4>
              <p>Rating : 3 start {ratings} </p>
              <button onClick={()=>  handleAddToCart(product)} className='btn-cart'>
                <p className='btn-text'>Add To Cart</p>
                <FontAwesomeIcon
                icon={faShoppingCart}
                ></FontAwesomeIcon>
              </button>
            </div>
   
        </div>
    );
};

export default Products;