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

    playerOneClick = async (event) => {
        await this.setState({playerOne: false})
    }

    playerTwoClick = async (i, index) => {
        if (this.state.playerOne === false) {
            console.log(i, index)
            // let newBoard = this.state.gameboard
            // newBoard[i][index] = 2
            // this.setState({gameboard: newBoard})
        } else {
            alert('cell taken')
        }
        await this.setState({ playerOne: true })
    }

    playerTurn = async (i, index) => {
        //event.stopPropagation()
        if (this.state.playerOne === false) {
            console.log(i, index)
            await this.setState({playerOne: true})
            let newBoard = this.state.gameboard
            newBoard[i][index] = 2
            this.setState({gameboard: newBoard})
        } else if (this.state.playerOne === true){
            //console.log(i, index)
            await this.setState({playerOne: false})
            // let newBoard = this.state.gameboard
            // newBoard[i][index] = 1
            // this.setState({gameboard: newBoard})
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