import React, { Component } from 'react'
import styled from 'styled-components'

const ConnectBoard = styled.table`
width: 100%
`
const TableCell = styled.td`
background-color: white;
border: black;
`

class GameBoard extends Component {

    state = {
        gameboard: [[0, 0, 0, 0, 0, 0, 0], 
                    [0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0]],
        playerOne: false,
    }

    playerOneClick = async (event) => {
        await this.setState({playerOne: false})
        //this.setState({gameboard[i][j]: 1})
    }

    playerTwoClick = async (event) => {
        if (this.state.playerOne === false) {
            let newBoard = this.state.gameboard
            newBoard[1][5] = 1
            this.setState({gameboard: newBoard})
            console.log(this.state.gameboard[1][5])
        } else {
            alert('cell taken')
        }
        await this.setState({playerOne: true})
    }

    render() {
        return (
            <ConnectBoard>
                {this.state.gameboard.map((row, index) => {
                    return (
                        <tr key={index}>{row.map((cell, index) => {
                            return (
                                <TableCell key={index} onClick = {this.state.playerOne ? this.playerOneClick : this.playerTwoClick}>{cell}</TableCell>
                            )
                        })}</tr>
                    )
                })}
            </ConnectBoard>
        )
    }
}

export default GameBoard