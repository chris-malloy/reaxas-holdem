import React from 'react';
import '../stylesheets/PokerHand.css';
import Card from './Card'

function PokerHand(props){
    var hand = [];
    props.cards.map((card,index)=>{
        hand.push(
            <Card key={index} card={card}  />
        )
    })
        return(
            <div className="col-sm-12">
                {hand}
            </div>
        )
}

export default PokerHand;    