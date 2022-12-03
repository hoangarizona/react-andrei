import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component{
  constructor(){//run 1st (1st life cycle)
    super();
    this.state = {
      monsters:[],//initial value
    }
  }
  componentDidMount(){ //run 3rd (3rd life cycle) and move on to render because state changes
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState(()=>{
        return {monsters: users}
      },
      ()=>{console.log(this.state)}
      ))
  }
  render(){//run 2nd (2nd life cycle)
    return (
      <div className="App">
        <input className='search-box' type='search' placeholder='search monsters' onChange={(event)=>{
          // [{name:}]
          const searchString = event.target.value.toLocaleLowerCase();
                const filteredMonsters = this.state.monsters.filter((monster) => { //IMMUTABILITY BECAUSE FILTER CREATE A NEW ONE
                    return monster.name.toLocaleLowerCase().includes(searchString);
          });
          this.setState(()=>{
            return {monsters: filteredMonsters};
          })
        }} />
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
