import React, { useState } from 'react';
import Hand from '../../models/dominos/hand';
import Player from '../../models/player/player';
import Boneyard from '../../models/dominos/boneyard';
import Bone from '../Domino/Bone';
import Rotation from '../Domino/Angle.enum';
import FlexContainer from '../Shared/FlexContainer';
import Domino from '../../models/dominos/domino';

type PlayerHandProps = { player: Player, boneyard: Boneyard };



export default function PlayerHand({ player, boneyard }: PlayerHandProps) {
    let [hand, setHand] = useState<Hand>(boneyard.drawHand(12));
    player.hand = hand;

    function drawFromBoneyard(boneyard: Boneyard, player: Player): void  {
        if(!player.hand) throw new Error('invalid state, player.hand undefined');
        player.hand.add(boneyard.drawBone());
        setHand(new Hand([ ...player.hand.map(bone => bone) ]));
    }

    return (
        <React.Fragment>
            <div>
                <p>{player.name}</p>
                <p>{player.hand.score}</p>
            </div>
            <button onClick={()=> drawFromBoneyard(boneyard, player)}>Draw Bone</button>
            <FlexContainer>
                {player.hand.map(bone => <Bone domino={bone} angle={Rotation.UP} />)}
            </FlexContainer>
        </React.Fragment>
    )
}