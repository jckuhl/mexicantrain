import React, { useState } from 'react';
import styled from 'styled-components';
import Hand from '../../models/dominos/hand';
import Player from '../../models/player/player';
import Boneyard from '../../models/dominos/boneyard';
import Bone from '../Domino/Bone';
import Rotation from '../Domino/Angle.enum';

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
    player.hand = hand;
    player.turn = true;

    function drawFromBoneyard(boneyard: Boneyard, player: Player): void  {
        player.hand.add(boneyard.drawBone());
        setHand(new Hand(player.hand.map(bone => bone)));
    }

    return (
        <React.Fragment>
            <div>
                <p>{player.name}</p>
                <p>{player.score}</p>
            </div>
            <button onClick={()=> drawFromBoneyard(boneyard, player)} disabled={!player.turn || boneyard.isEmpty}>Draw Bone</button>
            <BoneGrid>
                {player.hand.map(bone => <Bone domino={bone} angle={Rotation.UP} key={bone.id}/>)}
            </BoneGrid>
        </React.Fragment>
    )
}