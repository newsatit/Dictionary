import React, {Component} from 'react';

class Input extends Component {
    render() {
        const { onChange, onSubmit, searchInput } = this.props;
        return (
            <div>
                <form className="form-inline" onSubmit={onSubmit}>
                    <div className="form-group mx-sm-3 mb-2">
                        <label className="sr-only">Words to search</label>
                        <input type="text" className="form-control" onChange={onChange} value={searchInput} />
                    </div>
                    <button type="submit" className="btn btn-primary mb-2">Search</button>
                </form>
            </div>
        );
    }
}

export default Input;
