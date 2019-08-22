import React, {Component} from 'react';
import './App.css';
import Result from './Result'
import Input from './Input'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchInput: "",
      definitions: [],
      suggestions: [],
      showResult: false,
      isLoading: false
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
      isLoading: true
    })
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log('data')
        console.log(data)
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
          console.log('definitions')
          console.log(newDefinitions)
          console.log('suggestions')
          console.log(newSuggestions)
          this.setState({
            definitions: newDefinitions,
            suggestions: newSuggestions,
            showResult: true,
            isLoading: false
          })
        }
      })
      .catch((error)=> console.log(error))
    event.preventDefault()
  }

  render() {
    let result
    if (this.state.showResult) 
      result = <Result definitions={this.state.definitions} suggestions={this.state.suggestions}/> 
    else if (this.state.isLoading)
      result = 
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
    else 
      result = <div></div>
    return (
      <div className="container">
          <Input searchInput={this.state.searchInput} onChange={this.handleInputChange} onSubmit={this.handleSubmit}/>
          {result}
      </div>
    );    
  }
}

export default App;
