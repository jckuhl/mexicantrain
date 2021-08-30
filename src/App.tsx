import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";
import Player from './models/player/player';
import PlayerView from './views/PlayerView';

function App() {
    return <Router>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/lobby">Lobby</Link>
            </li>
        </ul>
        <Switch>
            {/* Change this later */}
            <Route path="/lobby">
                <PlayerView player={new Player("Scott")} players={[]} />
            </Route>
        </Switch>
    </Router>

    //return <PlayerView player={new Player('Scott')} players={[]} />
}

export default App;
