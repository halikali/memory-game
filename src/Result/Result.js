import React from 'react';
import { Link } from "react-router-dom";
import '../Result/Result.css';
class Result extends React.Component {

    render(){
        return (
                <div className="main">
                    <div className="game-buttons">
                        <p className="congrats-text">congratulations </p>
                        <Link to="/game" className="try-again-game">Try Again</Link>
                    </div>
                    
                    
                </div>
        )
    }
}

export default Result;