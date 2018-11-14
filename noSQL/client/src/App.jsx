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

  // MM notes: 
  // on load of page, generates a random genre and queries the database for movies that match that genre
  // to stress test the database, i should be sure to put the genre i'm searching for towards the end of the records
  // to make sure it is running all the way through the database 

  // if i had a component on the front end where you could click to update the genre
  // it would invoke a function with the movieId and the genre you want it to update to 
  // so it would have in the post body/data the movieId and the genre 

  getMovies() {
    const genre = genres[randNum(genres.length)];
    fetch(`api/movies/${genre}/relatedmovies`)
      .then(response => response.json())
      .then((movList) => {
        this.setState({ movieList: movList });
        // console.log(movList);
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
