import React from 'react';
import PlayerHand from './components/Hand/PlayerHand';
import Player from './models/player/player';
import Boneyard from './models/dominos/boneyard';
import PlayerView from './views/PlayerView';

function App() {
    return <PlayerView player={new Player('Scott')} players={[]} />
}

export default App;
