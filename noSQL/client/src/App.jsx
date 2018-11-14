import React from 'react';
import './Styles.css';
import PosterRow from './PosterRow';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';

const randNum = max => Math.floor(Math.random() * max);
const genres = ['action', 'romance', 'comedy', 'horror', 'documentary'];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: [],
      currIndex: 0,
    };
    this.prevSlide = this.prevSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
  }

  componentDidMount() {
    this.getMovies();
  }

  // MM notes: on load of page, generates a random genre and queries the database for related movies 
  getMovies() {
    const genre = genres[randNum(genres.length)];
    fetch(`api/movies/:${genre}/relatedmovies`)
      .then(response => response.json())
      .then((movList) => {
        this.setState({ movieList: movList });
        console.log(movList);
      })
      .catch(error => console.log(error));
  }

  prevSlide() {
    const { currIndex } = this.state;
    if (currIndex > 0) {
      this.setState(prevState => ({
        currIndex: prevState.currIndex - 1,
      }));
    }
  }

  nextSlide() {
    const { currIndex } = this.state;
    const { movieList } = this.state;
    if (currIndex < movieList.length - 8) {
      this.setState(prevState => ({
        currIndex: prevState.currIndex + 1,
      }));
    }
  }

  render() {
    const { movieList } = this.state;
    const { currIndex } = this.state;
    return (
      <div className="outermostDiv">
        <h2 id="header">Related Movies</h2>
        <div className="container">
          <PosterRow movies={movieList} currIndex={currIndex} />
          <LeftArrow prevSlide={this.prevSlide} />
          <RightArrow nextSlide={this.nextSlide} />
        </div>
      </div>
    );
  }
}

export default App;
