import React from 'react';
import Domino from '../../models/dominos/domino';

export default function SelecteDominoStats({domino} : { domino: Domino}) {
    return <div>
        <p>Left: {domino.left}</p>
        <p>Right: {domino.right}</p>
        <p>Score: {domino.score}</p>
    </div>
}