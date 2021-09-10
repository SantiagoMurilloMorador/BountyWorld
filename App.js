import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox'; 
import './App.css';


class App extends Component {
    constructor() {
        super()
        this.state = {
            Characters: [],
            searchfield: ''
        }
    }

  componentDidMount() {
    fetch('https://swapi.dev/api/people/?page=1&format=json').then(response=> {
        return response.json();
    }) 
    .then(people => {
        this.setState({Characters: people});
    })
    
  } 

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })       
    }

    render() {
        const filteredCharacters = this.state.Characters.filter(Characters => {
            return Characters.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        
            return (
                <div className='tc'>
                <h1 className='f1'>BountyWorld!</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList Characters={filteredCharacters}/>
                </div>
            );
    
        }
            }
    

export default App;