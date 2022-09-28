import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css'

const Shop = () => {
    const  [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);


    useEffect(() => {
        console.log('product load before fetch');
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res => res.json())
         .then(data => {setProducts(data)
            // console.log('product loaded')
        })
    }, []);


    useEffect(()=> {
        // console.log('local storage first line', products)

        const storedCart = getStoredCart();
        // console.log(storedCart)
        const savedCart = [];
        for(const id in storedCart){
            // console.log(id)
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){

                const quantity = storedCart[id];
                addedProduct.quantity = quantity; 
                savedCart.push(addedProduct)
                // console.log(addedProduct)   
            }
            
        }
        setCart(savedCart);
        // console.log('local storage finished')
    }, [products]);



    const handleAddToCart = (selectedProduct) => {
        const exists = cart.find(product => product.id === selectedProduct.id);
        let newCart = [];
        if(!exists){
            selectedProduct.quantity = 1;
            newCart = [...cart , selectedProduct];
        }
        else{
            const restCart = cart.filter(product => product.id !== selectedProduct.id)
            exists.quantity = exists.quantity + 1;
            newCart = [...restCart, exists]
        }

        // console.log(product)
        // dont do this..
         

        setCart(newCart)
        addToDb(selectedProduct.id)
      }


    return (
        <div className=' shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Products key={product.id}
                    product={product}
                    handleAddToCart={handleAddToCart}
                    
                    ></Products>)
                }
            </div>

            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;