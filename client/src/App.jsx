import React from 'react';
import PosterRow from './PosterRow.jsx';
import Poster from './Poster.jsx';

const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genre: props.genre,
      movieList: []
    }
  };

  componentDidMount () {
    this.getMovies();
  }

  getMovies () {
    axios.get(`/api/movies/:${this.state.genre}/relatedmovies`)
      .then(response => {this.setState({movieList: response.data})
      })
      .catch(error => console.log(error));
  }

  render () {
    return (
      <div>
        <h2 id="header">Related Movies</h2>
        <hr />
        <PosterRow movies={this.state.movieList}/>
      </div>
    )
  }
}

export default App;
