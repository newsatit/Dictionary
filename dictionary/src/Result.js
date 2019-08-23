import React, {Component} from 'react'
import WordCard from './WordCard'

class Result extends Component {
    render() {
        const { definitions, suggestions, isLoadingDef } = this.props
        console.log('isLoadingDef: ', isLoadingDef)
        const WordCards = isLoadingDef ? (
            <div className="text-center">
                <div className="text-primary" role="status">
                    <span>Loading Definition</span>
                </div>
                <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>  
        ) : definitions.length === 0 ? (
            <div className="alert alert-warning" role="alert">
                <strong>Sorry!</strong> No definition found.
            </div>
            ) : (
            <div>
            {
                definitions.map((def, index) => <WordCard key={index} word={def.word} shortdef={def.shortdef} fl={def.fl}/>)
            }                
            </div>
            ) 
  
        return (
            <div>
                <div style={{width: "30rem"}}>
                    {WordCards}
                </div>                
            </div>

        )
    }
}

export default Result
