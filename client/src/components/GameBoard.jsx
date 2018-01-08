import React, { Component } from 'react'
import styled from 'styled-components'

const ConnectBoard = styled.table`
width: 100%
`
const TableCell = styled.td`
background-color: red;
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
        break
    }

    playerTwoClick = async (event) => {
        await this.setState({playerOne: true})
        break
    }


    render() {
        return (
            <ConnectBoard>
                {this.state.gameboard.map((row) => {
                    return (
                        <tr>{row.map((cell) => {
                            return (
                                <TableCell onClick = {this.state.playerOne ? this.playerOneClick : this.playerTwoClick}>{cell.id}a</TableCell>
                            )
                        })}</tr>
                    )
                })}
            </ConnectBoard>
        )
    }
}

export default GameBoard