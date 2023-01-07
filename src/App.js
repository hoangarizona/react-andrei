import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import CardList from './components/card-list/car-list.component'
import SearchBox from "./components/search-box/search-box.component";
import './App.css';

class App extends Component {
  constructor() {
    //run 1st (1st life cycle)
    super();
    this.state = {
      monsters: [], //initial value
      searchField: "",
    };
  }
  componentDidMount() {
    //run 3rd (3rd life cycle) and move on to render because state changes
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          }
        )
      );
  }
  onSearchChange = (event) => {
    // [{name:}]
    const searchField = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchField }; //shortcut because of key and value are the same
    });
  };
  render() {
    //run 2nd (2nd life cycle)
    const {monsters, searchField} = this.state;
    const {onSearchChange} = this;
    const filteredMonsters = monsters.filter((monster) => {
      //IMMUTABILITY BECAUSE FILTER CREATE A NEW ONE
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox className={'monsters-search-box'} onChangeHandler={onSearchChange} placeholder={'search'} />
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
