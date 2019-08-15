import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieItem from "./MovieItem";

class MovieList extends Component {
    render() {
        let keynum = 1;
        let movies = this.props.movies.map((item) => {
            return <MovieItem key={keynum++} movie={item} />
        });
        return (
            <div>
                <ul className="list-group" id="movie-list">
                    {movies}
                </ul>
            </div>
        );
    }
}

MovieList.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object)
};

export default MovieList;