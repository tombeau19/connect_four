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
        playerOne: true,
    }

    playerTurn = async (i, index) => {
        if (this.state.playerOne === false && this.state.gameboard[index][i] === 0) {
            let newBoard = this.state.gameboard
            newBoard[index][i] = 2
            await this.setState({gameboard: newBoard})
            await this.setState({playerOne: true})
        } else if (this.state.playerOne === true && this.state.gameboard[index][i] === 0){
            let newBoard = this.state.gameboard
            newBoard[index][i] = 1
            await this.setState({gameboard: newBoard})
            await this.setState({playerOne: false})
        } else {
            alert('cell taken')
        }
    }

    render() {
        return (
            <ConnectBoard>
                <tbody>
                    {this.state.gameboard.map((row, index) => {
                        return (
                            <tr key={index}>
                                {row.map((cell, i) => {
                                    return (
                                        <TableCell onClick={(event) => this.playerTurn(i, index)} key={i}>{i}, {index}</TableCell>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </ConnectBoard>
        )
    }
}

export default GameBoard