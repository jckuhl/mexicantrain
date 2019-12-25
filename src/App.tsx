import React from 'react';
import Boneyard from './models/dominos/boneyard';
import Bone from './components/Domino/Bone';
import Plus from './components/Game/Plus';
import Rotation from './components/Domino/Angle.enum';

function App() {
    const pile = new Boneyard();
    return <div>
        { pile.map((domino) => <Bone domino={domino} />)}
    </div>
}

export default App;
