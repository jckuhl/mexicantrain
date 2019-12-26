import React from 'react';
import PlayerHand from './components/Hand/PlayerHand';
import Player from './models/player/player';
import Boneyard from './models/dominos/boneyard';

function App() {
    return <PlayerHand player={new Player("Scott")} boneyard={new Boneyard()}></PlayerHand>
}

export default App;
