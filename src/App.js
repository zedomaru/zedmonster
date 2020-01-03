import React from 'react';
import './App.css'
import CardList from './components/card-list/CardList'
import SearchField from './components/searchField/SearchField';

class App extends React.Component {

  state = {
    monsters: [],
    searchField: ''
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res =>  res.json())
    .then(result => this.setState({monsters: result}))
    .catch(err => {
      console.error({error: err})
    })
  }

  handleChange = e => {
    this.setState({searchField: e.target.value})
  }

  render(){
    const { monsters, searchField } = this.state
    const filteredMonster = monsters.filter(monster => {
     return monster.name.toLowerCase().includes(searchField.toLowerCase())
    })
    return (
        <div className="App">
          <h1>Zedmonster</h1>
          <SearchField placeholder='search monsters' handleChange={this.handleChange}/>
          <CardList monsters={filteredMonster}/>
        </div>
    );
}
}

export default App;
