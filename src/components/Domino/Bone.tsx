import React from 'react';
import styled from 'styled-components';
import Domino from '../../models/dominos/domino';
import Pip from './Pip';

type PipGridProps = { size: number }


const DominoPiece = styled.div`
    border: 2px solid black;
    border-radius: 10px;
    width: 100px;
    height: 50px;
    display: flex;
`;

const PipGrid = styled.div`
    display: grid;
    grid-template-columns: ${(props: PipGridProps) => props.size <= 9 ? 'repeat(3, 1fr)' : 'repeat(4, 1fr)'};
    grid-template-rows: repeat(3, 1fr);
    width: 50px;
    height: 50px;
    margin: auto;
`;

const Spacer = styled.div`
    width: 10px;
    height: 10px;
    margin: -1px -1px;
    padding: -1px -1px;
`;

export default function Bone({ domino } : {domino: Domino}) {
    const pipArray: { [key: number]: number[]} = {
        0: [],
        1: [4],
        2: [1, 3],
        3: [2, 5, 8],
        4: [],
        5: [],
        6: [],
        7: [],
        8: [],
        9: [],
        10: [],
        11: [],
        12: [],
    }

    function populatePips(dominoValue:number): JSX.Element[] {
        const pips: JSX.Element[] = [];
        for(let i = 0; i < (dominoValue > 9 ? 12 : 9); i++) {
            if(pipArray[dominoValue].includes(i)) {
                pips.push(<Pip key={i}/>)
            } else {
                pips.push(<Spacer key={i}/>)
            }
        }
        return pips;
    }

    const leftPips = populatePips(domino.left);
    const rightPips = populatePips(domino.right);

    return <DominoPiece>
        <PipGrid size={domino.left}>
            {leftPips}
        </PipGrid>
        <PipGrid size={domino.right}>
            {rightPips}
        </PipGrid>
    </DominoPiece>
} 