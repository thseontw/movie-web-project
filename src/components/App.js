import React, { Component } from 'react';
import axios from "axios";

import InputMovie from "./InputMovie";
import MovieList from "./MovieList";
import Loading from "./Loading";
import { Portal } from "react-portal";

const BASEURL = "/api";
const apikey = require('../apikey.json');

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [], isLoading: false, title:''
        };
    }

    changeTitle = (title) => {
        this.setState({
            title: title
        });
    }

    searchMovie = () => {
        let { title } = this.state;
        if (title.length >= 2) {
            this.setState({ isLoading: true });
            axios.get(BASEURL + '/v1/search/movie', {
                params: {
                    query: title,
                    display: 20,
                },
                headers: apikey,
            })
            .then((response) => {
                console.log('## reponse: ', response);
                this.setState({
                    movies: response.data.items,
                    isLoading: false,
                });
            })
            .catch((error) => {
                console.log("### error: ", error);
                this.setState({  isLoading: false });
            });
        } else {
            this.setState({ movies: {} });
        }
    }
    
    render() {
        return (
            <div className="container">
                <div className="well">
                    <div className="col-xs-1"></div>
                    <div className="title col-xs-10">:: 영화 검색</div>
                    <div className="col-xs-1"></div>
                    <div className="clearfix"></div>
                </div>
                <div className="panel panel-default panel-borderless">
                    <div className="panel-body">
                        <InputMovie searchMovie={this.searchMovie} title={this.state.title}
                            changeTitle={this.changeTitle}/>
                    </div>
                </div>
                <MovieList movies={this.state.movies} />
                <Portal node={document && document.getElementById('modal-area')}>
                    <Loading isLoading={this.state.isLoading}>
                        <div className="well title">
                            <h4>데이터 조회중</h4>
                        </div>
                    </Loading>    
                </Portal>
            </div>
        );
    }
}

export default App;