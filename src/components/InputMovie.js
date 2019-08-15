import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputMovie extends Component {
    changeTitle = (e) => {
        this.props.changeTitle(e.target.value);
    }

    pressEnter = (e) => {
        if(e.keyCode === 13) {
            this.props.searchMovie();
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col">
                    <div className="input-group">
                        <input id="title" type="text" className="form-control" name="title"
                            placeholder="영화제목을 입력해주세요." value={this.props.title}
                            onChange={this.changeTitle} onKeyUp={this.pressEnter} />
                        <span className="btn btn-primary input-group-addon"
                            onClick={this.props.searchMovie}>검{' '}색</span>
                    </div>
                </div>
            </div>
        );
    }
}

InputMovie.propTypes = {
    searchMovie: PropTypes.func.isRequired,
    changeTitle: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
};

export default InputMovie;