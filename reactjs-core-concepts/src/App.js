import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
{name: 'laptop', price: 30000, brand: 'mac'},
{name: 'library', price: 50000, brand: 'books'},
{name: 'watch', price: 80000, brand: 'saudi'},
{name: 'wabcam', price: 10000, brand: 'american'}
]
  return (
    <div className="App">
      {
        products.map(product => <Product name= {product.name} price={product.price}></Product>)
      }
     {/* <Product name="laptop" price="40000" brand="hp"></Product>
     <Product name="phone" price="70000" brand="iphone"></Product>
     <Product name="watch" price="2000" brand="aquriam"></Product> */}
    </div>
  );
}


function Product(props){
  return (
    <div className='product'>
      <h3>Name: {props.name} </h3>
      <p>Price: {props.price} </p>
      <p>Brand: {props.brand} </p>
    </div>
  )
}

export default App;
