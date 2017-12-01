import React, { Component } from 'react';
import './stylesheets/Board.css';
import Hand from './Hand';

class Board extends Component{
    render(){
        return(
            <div id="board">
                <Hand />
            </div>
        )
    }
}

export default Board;