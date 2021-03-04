import React from 'react';
import  '../Home/home.css'
import {Link} from 'react-router-dom';

class Home extends React.Component {
    render(){
        return(
            <div className="game-buttons main">
                <Link to="/game" className="start-game">Start Game </Link>
            </div>
        )
    }
}

export default Home;