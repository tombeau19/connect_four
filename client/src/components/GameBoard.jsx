import React, { Component } from 'react'

class GameBoard extends Component {

    state = {
        gameboard: [[0, 0, 0, 0, 0, 0, 0], 
                    [0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0]]
    }


    render() {
        return (
            <div>
                hello from GameBoard
            </div>
        )
    }
}

export default GameBoard