import React from 'react'

const WordCard = ({index, word, shortdef}) => (
    <div key={word}>
        <h4>{word}</h4>
        <h4>Definitions</h4>
        <ol>
            {shortdef.map((def, index) => <li key={index}>{def}</li>)}
        </ol>
    </div>
)

export default WordCard
