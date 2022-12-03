import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component{
  constructor(){
    super();
    this.state = {
      name: 'Tihua',
      company: 'ZTM'
    }
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>HI {this.state.name} ,{this.state.company}
          </p>
          <button onClick={()=>{
            this.setState((state, props)=>{
              return {
                name :'Andrei'
              }
            },()=>{console.log(this.state.name)}//this run asyn as the setState but only after setState ran
            );
          }}
        >
            Change name
          </button>
        </header>
      </div>
    );
  }
  
}

export default App;
