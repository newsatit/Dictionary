import React, {Component} from 'react'
import WordCard from './WordCard'

class Result extends Component {
    render() {
        const { definitions, suggestions } = this.props

        const WordCards = definitions.length === 0 ? (
            <div className="alert alert-warning" role="alert">
                <strong>Sorry!</strong> No definition found.
            </div>
            ) : (
            <div>
            {
                definitions.map((def, index) => <WordCard key={index} word={def.word} shortdef={def.shortdef} fl={def.fl}/>)
            }                
            </div>)

        return (
            <div style={{width: "30rem"}}>
                {WordCards}
            </div>
        )
    }
}

export default Result
