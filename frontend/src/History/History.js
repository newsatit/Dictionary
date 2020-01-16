import React, {Component} from 'react';

const histories = [
    {
        "query": "Hello",
        "created_at": "2020-01-15T09:39:20.089553Z"
    },
    {
        "query": "Elon Musk",
        "created_at": "2020-01-15T09:41:18.361383Z"
    },
    {
        "query": "determination",
        "created_at": "2020-01-15T09:43:41.927563Z"
    },
    {
        "query": "Test",
        "created_at": "2020-01-15T11:14:19.029061Z"
    }
]

class History extends Component {
    constructor(props) {
        super(props);
        this.state = {
            histories: histories
        };
    }
    render() {
        return (
            <ul>
                { histories.map((history, index) => <li key={index}>{history.query}</li>) }
            </ul>
        );
    }
}

export default History;