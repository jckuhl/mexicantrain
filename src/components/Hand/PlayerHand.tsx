import React, { useState } from 'react';
import Hand from '../../models/dominos/hand';
import Player from '../../models/player/player';
import Boneyard from '../../models/dominos/boneyard';
import Bone from '../Domino/Bone';
import Rotation from '../Domino/Angle.enum';
import FlexContainer from '../Shared/FlexContainer';

type PlayerHandProps = { player: Player };

function drawFromBoneyard(boneyard: Boneyard, player: Player): void | undefined {
    player.hand?.add(boneyard.drawBone());
}

export default function PlayerHand({ player }: PlayerHandProps) {
    const [boneyard, setBoneyard] = useState(new Boneyard());   // this line to be removed and boneyard handled globally
    const [hand, setHand] = useState(boneyard.drawHand(12));
    const bones = hand.map(bone => <Bone domino={bone} angle={Rotation.UP} />);
    player.hand = hand;
    return (
        <React.Fragment>
            <div>
                <p>{player.name}</p>
                <p>{player.hand.score}</p>
            </div>
            <button onClick={()=> drawFromBoneyard(boneyard, player)}>Draw Bone</button>
            <FlexContainer>
                {bones}
            </FlexContainer>
        </React.Fragment>
    )
}