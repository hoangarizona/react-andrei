import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters:[
        {
          name: 'Linda',
          id: '12dfds'
        },
        {
          name: 'Frank',
          id:'321321'
        },
        {
          name: 'Jacky',
          id:'2321321'
        }
      ]
     
    }
  }
  render(){
    return (
      <div className="App">
        {
          this.state.monsters.map(
              (monster)=>{
                return <div key={monster.id}><h1>{monster.name}</h1></div>
              }
          )
        }
      </div>
    );
  }
  
}

export default App;
