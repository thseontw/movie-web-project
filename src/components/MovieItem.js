import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovieItem extends Component {

    toNaverLink = () => {
        window.location.href = this.props.movie.link;
    }

    render() {
        let { movie } = this.props;
        return (
            <li className="list-group-item" onClick={this.toNaverLink}>
                <div className="col-xs-3">
                    <img src={movie.image ? movie.image : require('../img/no-image.png')} alt=""
                        className="img-responsive img-thumbnail photoWidth" />
                </div>
                <div className="col-xs-8">
                    <span className="title" dangerouslySetInnerHTML={ {__html: movie.title} }></span><br/>
                    <span dangerouslySetInnerHTML={ {__html: movie.subtitle} }></span><br/>
                    <span >{movie.pubDate}</span><br />
                    <span className="glyphicon glyphicon-user"></span>{' '}
                    <span >{movie.actor}</span><br />
                    <span className="glyphicon glyphicon-star"></span>{' '}
                    <span >평점 : {movie.userRating}</span><br />
                </div>
                <div className="clearfix"></div>
            </li>
        );
    }
}

MovieItem.propTypes = {
    movie: PropTypes.object.isRequired,
    // title: PropTypes.string.isRequired,
    // link: PropTypes.string,
    // image: PropTypes.string,
    // subtitle: PropTypes.string,
    // pubDate: PropTypes.string,
    // director: PropTypes.string,
    // actor: PropTypes.string,
    // userRating: PropTypes.string
};

export default MovieItem;