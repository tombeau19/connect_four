import React, { Component } from 'react'
import styled from 'styled-components'

const ConnectBoard = styled.table`
width: 50%
`
const TableCell = styled.td`
border-style: solid;
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
                await this.winAcross(i, index)
                await this.winUpAndDown(i, index)
            } else {
                alert('place token in lowest available slot')
            }
        } else if (this.state.playerOne === true && this.state.gameboard[index][i] === 0) {
            if (index + 1 === 6 || this.state.gameboard[index + 1][i] !== 0) {
                const newBoard = this.state.gameboard
                newBoard[index][i] = 'black'
                await this.setState({ gameboard: newBoard })
                await this.setState({ playerOne: false })
                await this.winAcross(i, index)
                await this.winUpAndDown(i, index)
            } else {
                alert('place token in lowest available slot')
            }
        } else {
            alert('cell taken')
        }
    }

    clearBoard = () => {
        const resetBoard = [
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0]
        ]
        this.setState({ gameboard: resetBoard })
        this.setState({ playerOne: true })
    }

    //win conditions
    winAcross = (i, index) => {
        const board = this.state.gameboard
        board.map((row, index) => {
            row.map((cell, i) => {
                if (board[index][i] === 'red' && board[index][i + 1] === 'red' && board[index][i + 2] === 'red' && board[index][i + 3] === 'red') {
                    alert('player 2 wins')
                    this.clearBoard()
                } if (board[index][i] === 'black' && board[index][i + 1] === 'black' && board[index][i + 2] === 'black' && board[index][i + 3] === 'black') {
                    alert('player 1 wins')
                    this.clearBoard()
                }
            })
        })
    }

    winUpAndDown = (i, index) => {
        const board = this.state.gameboard
        //console.log('hit')
        // console.log(board[index][i])
        // console.log(board[index - 1][i])
        // console.log(board[index - 2][i])
        // console.log(board[index + 3][i])
        board.map((row, index) => {
            row.map((cell, i) => {
                if (board[index][i] === 'red' && board[index - 1][i] === 'red' && board[index - 2][i] === 'red' && board[index - 3][i] === 'red') {
                    alert('player 2 wins')
                    this.clearBoard()
                } if (board[index][i] === 'black' && board[index - 1][i] === 'black' && board[index - 2][i] === 'black' && board[index - 3][i] === 'black') {
                    alert('player 1 wins')
                    this.clearBoard()
                }
            })
        })
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
                                        <TableCell onClick={(event) => this.playerTurn(i, index)} key={i} className={cell}></TableCell>
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