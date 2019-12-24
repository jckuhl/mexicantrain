import React from 'react';
import styled from 'styled-components';
import Domino from '../../models/dominos/domino';
import Pip from './Pip';

type PipGridProps = { size: number }

const PipGrid = styled.div`
    display: grid;
    grid-template-columns: ${(props: PipGridProps) => props.size > 9 ? 'repeat(3, 1fr)' : 'repeat(4, 1fr)'};
    grid-template-rows: repeat(3, 1fr);
    width: 50px;
    height: 50px;
    margin: auto;
`;

const DominoPiece = styled.div`
    border: 2px solid black;
    border-radius: 10px;
    width: 100px;
    height: 50px;
    display: flex;
`;

const Spacer = styled.div`
    width: 10px;
    height: 10px;
    border: 1px solid tomato;
    content: '';
    margin: -1px -1px;
    padding: -1px -1px;
`;

export default function Bone({ domino } : {domino: Domino}) {
    const leftPips = [];
    while(leftPips.length < 9) {
        leftPips.push(Spacer);
    }
    return <DominoPiece>
        <PipGrid size={domino.left}>
            {leftPips.map(lp => <Spacer/>)}
        </PipGrid>
        <PipGrid size={domino.right}>

        </PipGrid>
    </DominoPiece>
} 