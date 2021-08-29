import React, { useState } from 'react';
import styled from 'styled-components';
import Hand from '../../models/dominos/hand';
import Player from '../../models/player/player';
import Boneyard from '../../models/dominos/boneyard';
import Bone from '../Domino/Bone';
import Domino from '../../models/dominos/domino';
import Rotation from '../Domino/Angle.enum';
import SelecteDominoStats from './SelecteDominoStats';

type PlayerHandProps = { player: Player, boneyard: Boneyard };

const BoneGrid = styled.section`
    display: grid;
    grid-template-columns: repeat(10, 50px);
    grid-template-rows: repeat(10, 100px);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    margin: 20px;
    
    div {
        transform-origin: 25px 25px;
    }
`;

export default function PlayerHand({ player, boneyard }: PlayerHandProps) {
    let [hand, setHand] = useState<Hand>(()=> boneyard.drawHand(12));
    let [selectedDomino, setSelectedDomino] = useState<Domino|null>();
    player.hand = hand;
    player.turn = true;

    function drawFromBoneyard(boneyard: Boneyard, player: Player): void  {
        player.hand.add(boneyard.drawBone());
        setHand(new Hand(player.hand.map(bone => bone)));
    }

    let dominos: JSX.Element[] = player.hand.map(domino => 
        <Bone domino={domino} angle={Rotation.UP} key={domino.id} selected={domino.selected} clickEvent={()=> clickEvent(domino.id)} />
    )

    function clickEvent(id: string) {
        let dominoes = hand.map(domino => {
            if(domino.id === id) {
                domino.selected = !domino.selected;
                if(domino.selected) {
                    setSelectedDomino(domino);
                } else {
                    setSelectedDomino(null);
                }
            } else {
                domino.selected = false;
            }
            return domino;
        });
        let newHand = new Hand(dominoes);
        setHand(newHand);
    }

    return (
        <React.Fragment>
            <div>
                <p>{player.name}</p>
                <p>Points Remaining: {player.score}</p>
            </div>
            {selectedDomino ? <SelecteDominoStats domino={selectedDomino}/> : <p>No domino selected</p>}
            <button onClick={()=> drawFromBoneyard(boneyard, player)} disabled={!player.turn || boneyard.isEmpty}>Draw Bone</button>
            <BoneGrid>
                {dominos}
            </BoneGrid>
        </React.Fragment>
    )
}