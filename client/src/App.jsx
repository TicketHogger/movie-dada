import React from 'react';
import './Styles.css';
import PosterRow from './PosterRow.jsx';
import Poster from './Poster.jsx';
import LeftArrow from './LeftArrow.jsx';
import RightArrow from './RightArrow.jsx';

const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genre: props.genre,
      movieList: [],
      currIndex: 0
    };
    this.prevSlide = this.prevSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
  };

  componentDidMount () {
    this.getMovies();
  }

  prevSlide () {
    if (this.state.currIndex > 0) {
      this.setState(prevState => ({
        currIndex: prevState.currIndex - 1
      }));
    }
  }

  nextSlide () {
    if (this.state.currIndex < 8) {
      this.setState(prevState => ({
        currIndex: prevState.currIndex + 1
      }));
    }
  }

  getMovies () {
    axios.get(`/api/movies/:${this.state.genre}/relatedmovies`)
      .then(response => {this.setState({movieList: response.data})
      })
      .catch(error => console.log(error));
  }

  render () {
    return (
      <div className="outermostDiv">
        <h2 id="header">Related Movies</h2>
        <div className="container">
          <PosterRow movies={this.state.movieList} currIndex={this.state.currIndex}/>
          <LeftArrow prevSlide={this.prevSlide}/>
          <RightArrow nextSlide={this.nextSlide}/>
        </div>
      </div>
    )
  }
}

export default App;
