import React from 'react';

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
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }

  render () {
    return (
      <div>
        <h2 id="header">Related Movies</h2>
        <hr />
      </div>
    )
  }
}

export default App;