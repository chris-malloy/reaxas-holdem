import React, { Component } from 'react';
import '../stylesheets/PokerBoard.css';
// custom components
import PokerHand from './PokerHand';
// utility classes
import Deck from '../utilityClasses/Deck';

// create cards object
var cards = new Deck();

class PokerBoard extends Component{
    constructor(props){
        super(props);
        this.state = {
            dealersHand: [],
            playersHand: [],
            communityCards: [],
        }
    }
    componentDidMount(){
        this.prepDeck();
    }
    // method to begin poker
    prepDeck(){
        cards.createDeck();
        cards.shuffleDeck();
        var card1 = cards.deck.shift();
        var card2 = cards.deck.shift();
        var card3 = cards.deck.shift();
        var card4 = cards.deck.shift();
        // deal cards
        var playersHand = [card1,card3];
        var dealershand = [card2,card4];
        this.setState({
            playersHand: playersHand,
            dealersHand: dealershand,
        })
    }

    render(){
        console.log(this.state.playersHand);
        return(
            <div id="board">
                <PokerHand cards={this.state.dealersHand} />
                <PokerHand cards={this.state.playersHand} />
                <PokerHand cards={this.state.communityCards} />
            </div>
        )
    }
}

export default PokerBoard;