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
            this.setState({name: 'Andrei'});
            console.log(this.state.name);//this will be the old value because the setState run async
          }}>
            Change name
          </button>
        </header>
      </div>
    );
  }
  
}

export default App;
