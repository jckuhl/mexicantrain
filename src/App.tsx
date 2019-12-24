import React from 'react';
import Boneyard from './models/dominos/boneyard';
import Bone from './components/Domino/Bone';

function App() {
    const pile = new Boneyard();
    return <div>
        { pile.map((domino) => <Bone domino={domino}/>)}
    </div>
}

export default App;
