import React from 'react';
import Player from '../Player/Player';
import './Players.css'

const Players = ({players,cart, setCart}) => {
    // console.log(players)
    // const {Players} = props;
    return (
        <div>
           <div className='card-container'>
           {
              players.map(pd => <Player
              player={pd}
              cart={cart}
              setCart={setCart}
              key={pd?.idPlayer} 
              ></Player>)
            }
           </div>
        </div>
    );
};

export default Players;