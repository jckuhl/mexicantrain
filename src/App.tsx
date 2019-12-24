import React from 'react';
import Domino from './models/dominos/domino';
import Boneyard from './models/dominos/boneyard';

function App() {
    const pile = new Boneyard();
    return <div>
        { pile.map((domino) => <p>Left {domino.left}, Right {domino.right}, Score {domino.score}</p>)}
    </div>
}

export default App;
