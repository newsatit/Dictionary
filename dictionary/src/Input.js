import React, {Component} from 'react';

class Input extends Component {
    render() {
        const { onChange, onSubmit, searchInput } = this.props;
        return (
            <div>
                <form onSubmit={onSubmit}>
                    <input type="text" name="word" onChange={onChange} value={searchInput}/>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default Input;
