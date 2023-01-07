import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

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
          },
          () => {
            console.log(this.state);
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

    const filteredMonsters = this.state.monsters.filter((monster) => {
      //IMMUTABILITY BECAUSE FILTER CREATE A NEW ONE
      return monster.name.toLocaleLowerCase().includes(this.state.searchField);
    });

    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={this.onSearchChange}
        ></input>

        {filteredMonsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
