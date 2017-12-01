import React, { Component } from 'react';
import '../stylesheets/PokerBoard.css';
// custom components
import PokerHand from './PokerHand';
import GameButtons from './GameButtons'
import ThePot from './ThePot';
// utility classes
import Deck from '../utilityClasses/Deck';

// create cards object
var cards = new Deck();

class PokerBoard extends Component{
    constructor(props){
        super(props);
        this.state = {
            dealersHand: ['deck','deck'],
            playersHand: ['deck','deck'],
            communityCards: ['deck','deck','deck','deck','deck'],
            wager: 0,
            bankRoll: 1000,
        }
        this.prepDeck = this.prepDeck.bind(this);
        this.draw = this.draw.bind(this);
        this.playerBet = this.playerBet.bind(this);
    }
    componentDidMount(){
        // this.prepDeck();
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

    playerBet(amount){
        const newWager = this.state.wager + amount;
        this.setState({
            wager: newWager
        });
        this.draw();
    }

    draw(){
        var communityNewHand = this.state.communityCards;
        if (communityNewHand[0] === 'deck'){
            // deal flop
            communityNewHand = [cards.deck.shift(),cards.deck.shift(),cards.deck.shift()];
        } else {
            // for turn/river
            communityNewHand.push(cards.deck.shift());
        }
        this.setState({
            communityCards: communityNewHand,
        })

    }

    render(){
        console.log(this.state.playersHand);
        return(
            <div id="board">
                <ThePot wager={this.state.wager} />
                <h1>Dealers Hand</h1>
                <PokerHand cards={this.state.dealersHand} />
                <h1>Community Cards</h1>
                <PokerHand cards={this.state.communityCards} />
                <h1>Players Hand</h1>
                <PokerHand cards={this.state.playersHand} />
                <GameButtons dealFunction={this.prepDeck} betFunction={this.playerBet} />
            </div>
        )
    }
}

export default PokerBoard;