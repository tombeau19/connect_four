import React, { Component } from 'react'
import styled from 'styled-components'

const ConnectBoard = styled.table`
width: 50%
`
const TableCell = styled.td`
border: black;
width: 50px;
height: 50px;
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
        color: 'white',
        id: ''
    }

    playerTurn = async (i, index) => {
        if (this.state.playerOne === false && this.state.gameboard[index][i] === 0) {
            let newBoard = this.state.gameboard
            newBoard[index][i] = 'two'
            await this.setState({ gameboard: newBoard})
            await this.setState({ playerOne: true })
        } else if (this.state.playerOne === true && this.state.gameboard[index][i] === 0) {
            let newBoard = this.state.gameboard
            newBoard[index][i] = 'one'
            await this.setState({ gameboard: newBoard})
            await this.setState({ playerOne: false })
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
                                        <TableCell onClick={(event) => this.playerTurn(i, index)} key={i} className={cell}>{cell}</TableCell>
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