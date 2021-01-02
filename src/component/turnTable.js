import React, { useState, useEffect } from 'react';
// import '../stylesheets/turnTable.css';

import { Table } from 'semantic-ui-react';


const NUMSOFROW = () => {

    const max = 24;
    const arr = [];
    let i;
    for (i = 1; i <= max; i ++) {
        arr.push(i);
    };

    return arr;
}

export default function TurnTable() {
    console.log(NUMSOFROW())

    return (
        <div className='turn-table'> 
            <Table color='blue'>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell></Table.HeaderCell>
                        <Table.HeaderCell>Time</Table.HeaderCell>
                        <Table.HeaderCell>Turn</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {NUMSOFROW().map( (n) => {
                        return (
                            <Table.Row key={n}>
                                <Table.Cell>{n}</Table.Cell>
                                <Table.Cell></Table.Cell>
                                <Table.Cell></Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
        </div>
    );
}
