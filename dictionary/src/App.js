import React, {Component} from 'react';
import './App.css';
import Result from './Result/Result'
import Input from './Input/Input'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchInput: "",
      definitions: [],
      suggestions: [],
      showResult: false,
      isLoadingDef: false
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange(event) {
    this.setState({
      searchInput: event.target.value
    })
  }

  handleSubmit(event) {   
    const word = this.state.searchInput.trim();
    const base = 'https://www.dictionaryapi.com/api/v3/references/collegiate/json'
    const url = base + '/' + word + '?key=8ff43ecf-f2dc-453e-8de3-c8a1b17c02b3'
    this.setState({
      isLoadingDef: true,
      showResult: true
    }, () => {
      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          let newDefinitions, newSuggestions
          try {
            newDefinitions = data.map((def) => ({
              word: def.meta.id,
              shortdef: def.shortdef,
              fl: def.fl
            }))
            newSuggestions = []
          } catch (error) {
            console.log(error)
            newDefinitions = []
            newSuggestions = data
          } finally {
            this.setState({
              definitions: newDefinitions,
              suggestions: newSuggestions,
              isLoadingDef: false
            })
          }
        })
        .catch((error)=> console.log(error)) 
    })
    event.preventDefault()  
  }

  render() {
    const {definitions, suggestions, isLoadingDef, showResult} = this.state

    return (
      <div className="container  my-sm-5">
          <Input searchInput={this.state.searchInput} onChange={this.handleInputChange} onSubmit={this.handleSubmit}/>
          { showResult ? <Result definitions={definitions} suggestions={suggestions} isLoadingDef={isLoadingDef}/> : <div></div> }
      </div>
    );    
  }
}

export default App;
