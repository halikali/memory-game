import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import './index.css';
import img1 from './assets/img1.png' ; 
import img2 from './assets/img2.png' ; 
import img3 from './assets/img3.png' ; 
import img4 from './assets/img4.png' ; 
import img5 from './assets/img5.png' ; 
import img6 from './assets/img6.png' ; 

export default class Memory extends Component {
    constructor(props){
        super(props)
        this.state = {
            cards : [
                {id : 1 , 
                source : img1},
                {id : 2 , 
                source : img2},
                {id : 3 , 
                source : img3},
                {id : 4 , 
                source : img4},
                {id : 5 , 
                source : img5},
                {id : 6 , 
                source : img6},
                {id : 7 , 
                source : img1},
                {id : 8 , 
                source : img2},
                {id : 9 , 
                source : img3},
                {id : 10 , 
                source : img4},
                {id : 11, 
                source : img5},
                {id : 12 , 
                source : img6}
                  ],
            selectByUser : [],
            liClassList : [],
            isStart : false,
            arrayForComplete : []
            
        }

        this.shuffle(this.state.cards);
        //lodash - shuffle
    }

    // componentDidUpdate(){
    //     console.warn('state:', this.state, 'props: ', this.props);
    // }

    score = 0 ; 

    shuffle = (array) => {
        this.setState({
            cards : array.sort(() => Math.random() - Math.random())
        });
      }

     
 
    onClickHandler = (event ) => {
       this.setState({
            selectByUser : [...this.state.selectByUser , event.target.firstChild.src ],  
        })
         
        
        // let {selectByUser} = this.state;
        // selectByUser.push(event.target.firstChild.src);
        
        let {liClassList} = this.state;
        liClassList.push(event.target);
        
        event.target.classList.remove("closed");
        setTimeout((event) => {
            this.isMatched(event)
          },500);
        
    }
    
    isMatched = (event) => {
        
        let selectOne = this.state.selectByUser[0];
        let selectTwo = this.state.selectByUser[1];
        if(this.state.selectByUser.length === 2){
            
            if(selectOne === selectTwo){
                this.setState({
                    arrayForComplete : [...this.state.arrayForComplete , selectTwo]
                })
            }else{
                this.state.liClassList.map( item => {
                    setTimeout(() => {item.classList.add("closed")} , 200)
                })
            }
            this.setState({selectByUser : [] , liClassList : []}) ; 
        }
        
    }

    startGame = () =>{
        this.setState({
            isStart: !this.state.isStart
        });
       
    }
     
    

    render() {
       
              return (
                <>
                    <div className="container">
                    <div className="card-container">
                    {this.state.cards.map(element => (
                        <li key={element.id} onClick={this.onClickHandler} className="closed" >
                            <img src={element.source} className="image" alt={element.id} >
                            </img>
                        </li>
                    ))}
                    </div>
                    {this.state.arrayForComplete.length > 5 && (  <Redirect to="/result" /> 
                    // <div className="completed game-buttons">
                    //     <p>Tebrikler Tamamladınız </p>
                    //     <button onClick={this.startGame} className="start-game end-game">  try again </button> 
                    // </div>
                    )}
                    </div>
                </>
              );
        
    }
}
