import React, {Component} from 'react'
import WordCard from './WordCard'

class Result extends Component {
    render() {
        const { definitions, suggestions } = this.props

        const WordCards = definitions.length === 0 ? (
            <div >No definition found</div>
            ) : (
            <div style={{width: "30rem"}}>
            {
                definitions.map((def, index) => <WordCard key={index} word={def.word} shortdef={def.shortdef} fl={def.fl}/>)
            }                
            </div>)

        return (
            <div>
                {WordCards}
            </div>
        )
    }
}

export default Result
