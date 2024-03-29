import React, { MouseEvent, useEffect, useState } from 'react';
import styled from 'styled-components';
import Domino from '../../models/dominos/domino';
import Pip from './Pip';
import Rotation from './Angle.enum';
import Hand from '../../models/dominos/hand';

type PipGridProps = { size: number }
type DominoContainerProps = { angle?: Rotation, selected: boolean }
type DominoTooltipProps = { top: string, left: string }

const DominoContainer = styled.div`
    border: 2px solid black;
    border-radius: 10px;
    width: 100px;
    height: 50px;
    display: flex;
    align-items: center;
    background-color: white;
    transform: ${(props: DominoContainerProps) => props.angle ? 'rotate(' + props.angle + ')' : Rotation.DEFAULT};
    -webkit-box-shadow: ${(props: DominoContainerProps) => props.selected ? '0px 0px 16px 2px #000000' : 'none'}; 
    box-shadow: ${(props: DominoContainerProps) => props.selected ? '0px 0px 16px 2px #000000' : 'none'};
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
`;

const Divider = styled.div`
    height: 45px;
    border: none;
    border-right: 2px solid black;
    margin: -1px;
    vertical-align: middle;
`;

const DominoToolTip = styled.div`
    visibility: visible;
    position: absolute;
    z-index: 1000;
    background: tomato;
    outline: 1px solid black;
    top: ${(props: DominoTooltipProps) => props.top};
    left: ${(props: DominoTooltipProps) => props.left};
`;

type PipInfo = { pips: number[], color?: string }
const pipArray: { [key: number]: PipInfo} = {
    0: { pips: [] },
    1: { pips: [4], color: 'cyan'},
    2: { pips: [0, 8], color: 'green'},
    3: { pips: [0, 4, 8], color: 'magenta' },
    4: { pips: [0,2,6,8], color: 'grey' },
    5: { pips: [0,2,4,6,8], color: 'blue' },
    6: { pips: [0,1,2,6,7,8], color: 'goldenrod' },
    7: { pips: [0,1,2,4,6,7,8], color: 'blue' },
    8: { pips: [0,1,2,3,5,6,7,8], color: 'green' },
    9: { pips: [0,1,2,3,4,5,6,7,8], color: 'purple' },
    10: { pips: [0,1,2,3,4,7,8,9,10,11], color: 'orange' },
    11: { pips: [0,1,2,3,4,5,7,8,9,10,11], color: 'black' },
    12: { pips: [0,1,2,3,4,5,6,7,8,9,10,11], color: 'grey' },
}

/**
 * A React Component representing a single domino
 * @param props 
 */
type boneProps = {domino: Domino, angle?: Rotation, selected: boolean, clickEvent: any};
export default function Bone({ domino, angle, clickEvent, selected } : boneProps) {
    
    const [client, setClient] = useState<{ top: string, left: string}>({ top: '0px', left: '0px'});

    /**
     * Populates a JSX.Element array with <Pip> or <Spacer> components
     * @param dominoValue 
     * @returns JSX.Element array
     */
    function populatePips(dominoValue:number): JSX.Element[] {
        const pips: JSX.Element[] = [];
        for(let i = 0; i < (dominoValue > 9 ? 12 : 9); i++) {
            if(pipArray[dominoValue].pips.includes(i)) {
                pips.push(<Pip key={i} color={pipArray[dominoValue].color}/>)
            } else {
                pips.push(<Spacer key={i}/>)
            }
        }
        return pips;
    }

    const leftPips = populatePips(domino.left);
    const rightPips = populatePips(domino.right);

    return (
        <DominoContainer angle={angle} onClick={ ()=> clickEvent() } selected={selected} >
            <PipGrid size={domino.left}>
                {leftPips}
            </PipGrid>
            <Divider/>
            <PipGrid size={domino.right}>
                {rightPips}
            </PipGrid>
        </DominoContainer>
    );
} 