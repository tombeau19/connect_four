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
    }

    playerTurn = async (i, index) => {
        if (this.state.playerOne === false && this.state.gameboard[index][i] === 0) {
            if (index + 1 === 6 || this.state.gameboard[index + 1][i] !== 0) {
                const newBoard = this.state.gameboard
                newBoard[index][i] = 'red'
                await this.setState({ gameboard: newBoard })
                await this.setState({ playerOne: true })
            } else {
                alert('place token in lowest available slot')
            }
        } else if (this.state.playerOne === true && this.state.gameboard[index][i] === 0) {
            if (index + 1 === 6 || this.state.gameboard[index + 1][i] !== 0) {
                const newBoard = this.state.gameboard
                newBoard[index][i] = 'black'
                await this.setState({ gameboard: newBoard })
                await this.setState({ playerOne: false })
            } else {
                alert('place token in lowest available slot')
            }
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