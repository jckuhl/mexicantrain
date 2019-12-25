import React from 'react';
import PlayerHand from './components/Hand/PlayerHand';
import Player from './models/player/player';

function App() {
    return <PlayerHand player={new Player("Scott")}></PlayerHand>
}

export default App;
