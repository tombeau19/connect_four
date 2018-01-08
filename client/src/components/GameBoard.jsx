import React, { Component } from 'react'
import styled from 'styled-components'

const ConnectBoard = styled.table`
width: 100%
`
const TableRow = styled.tr`
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
        playerTwo: false,
    }


    render() {
        return (
            <table>
                {this.state.gameboard.map((arr) => {
                    return (
                        <tr>{arr.map((cell) => {
                            return (
                                <td>cell</td>
                            )
                        })}</tr>
                    )
                })}
            </table>
        )
    }
}

export default GameBoard