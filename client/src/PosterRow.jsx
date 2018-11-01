import React from 'react';
import Poster from './Poster.jsx';

const PosterRow = ({ movies, currIndex }) => {
  currIndex >= 0 ? currIndex : 0
  return (
      <div className="posters"> 
        {movies.slice(currIndex, currIndex + 8).map(poster => (<Poster poster={poster.image} title={poster.title} year={poster.year} key={poster.id}/>)) }
      </div>
  )
}

export default PosterRow;
