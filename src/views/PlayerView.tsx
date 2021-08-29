import React from 'react';
import { useState } from "react";
import CenterPiece from '../components/CenterPiece/CenterPiece';
import PlayerHand from "../components/Hand/PlayerHand";
import Boneyard from "../models/dominos/boneyard";
import Domino from '../models/dominos/domino';
import Player from "../models/player/player";

export default function PlayerView({ player, players }: { player: Player, players: Player[]}) {
    let [boneyard, setBoneyard] = useState(new Boneyard())

    function drawDouble(value: number) {
        return boneyard.drawBone(new Domino(value, value))
    }

    return <section>
        <CenterPiece domino={drawDouble(12)}/>
        <PlayerHand player={new Player('Scott')} boneyard={boneyard}/>
    </section>
}