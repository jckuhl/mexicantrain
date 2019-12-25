import React from 'react';
import Boneyard from './models/dominos/boneyard';
import Bone from './components/Domino/Bone';
import Plus from './components/Game/Plus';

function App() {
    const pile = new Boneyard();
    return <div>
        <Plus size="24px"/>
        { pile.map((domino) => <Bone domino={domino}/>)}
    </div>
}

export default App;
