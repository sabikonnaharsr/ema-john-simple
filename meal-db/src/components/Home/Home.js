import { keyboard } from '@testing-library/user-event/dist/keyboard';
import React, { useEffect, useState } from 'react';
import Players from '../Plalyers/Players';
import './Home.css';

const Home = () => {
    const [players, setPlayers] = useState([])
    const [search, setSearch] = useState("");
    const [cart, setCart] = useState([]);


   useEffect(()=>{
    fetch(`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${search}`)
    .then(res => res.json())
    .then((data )=> {
        setPlayers(data?.player)
    })

   },[search]);
  

   const handleDelete = (id) => {
    // console.log(id)
    const leftPlayer = cart.filter((pd) => pd.idPlayer !== id)
    console.log(leftPlayer)
   };

    // const handleChange = (e) => {
    //     //    setSearch(e.target.value);
    //     }

    // const handleChange = () => {
    //     console.log('search')
    // }
  

    return (
        <div>  
          <div className='home-container'>
            <div className='left-side-players'>
                <div className='all-btn'>
                    {/* <input onBlur={handleChange} className='search-input' type="text" /> */}
                   <input onChange={(e) => setSearch(e.target.value)} className='search-input' type="text" />
                   <button className='search-btn'>search</button>
                </div>

                <div className="players-container">
                       <Players 
                            cart={cart}
                            players={players}
                            setCart={setCart}
                       ></Players>
                </div> 
            </div>


             <div className='right-side-cart'>
               <div className="cart">
                  <h2> Player Cart</h2>         
                  {
                     cart?.map(p=> 
                    <div className='cart-info-container'>
                       <li>{p.strPlayer}</li>
                       <button onClick={handleDelete(p.idPlayer)} 
                       className='delete-btn'>X</button>                      
                    </div> 
                   )}
               </div>
            </div>
          </div>   
       </div>
    );
};

export default Home;