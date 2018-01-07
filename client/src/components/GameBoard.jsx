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
                    [0, 0, 0, 0, 0, 0, 0]]
    }


    render() {
        return (
            <ConnectBoard>
                {this.state.gameboard.map((arr) => {
                    return (
                        <TableRow>{arr.map((cell) => {
                            return (
                                <td>cell</td>
                            )
                        })}</TableRow>
                    )
                })}
            </ConnectBoard>
        )
    }
}

export default GameBoard