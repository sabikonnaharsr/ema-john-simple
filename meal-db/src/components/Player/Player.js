import React from 'react';
import './Player.css'

const Player = ({player, cart, setCart}) => {
    
    const {strCutout, idPlayer, strPlayer} = player;
 
    const handleAddToCart = () => {
   
        const info = {
            strCutout,
            idPlayer,
            strPlayer,
            price: 115,
        };
        if(cart?.length){
            setCart([...cart, info]);  
            return;     
        }
        else{
            setCart([info])
            return
        }
    };
    
    return (
        <div className='card'>
            <img  className="player-img" src={strCutout} alt="" />
             <h3>{strPlayer}</h3> 
            {/* <p>{strDescriptionEN? strDescriptionEN?.slice(0, 40): "lorem15"}</p>
            <p>{idPlayer}</p> */}
                <div className='all-btn'>
                <button className='card-btn'>Details</button>
                <button onClick={handleAddToCart} className='card-btn'>AddToCart</button>
                <button className='card-btn'>BookMark</button>
                </div>
        </div>
    );
};

export default Player;