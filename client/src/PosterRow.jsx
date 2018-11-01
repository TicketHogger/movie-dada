import React from 'react';
import styles from './Styles.css';
import Poster from './Poster.jsx';

const PosterRow = ({ movies }) => {
  return (
      <div className="posters">
        { movies.slice(0, 8).map(poster => (<Poster poster={poster.image} title={poster.title} year={poster.year} key={poster.id}/>)) }
      </div>
  )
}

export default PosterRow;
