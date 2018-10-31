import React from 'react';
import Poster from './Poster.jsx';

const PosterRow = ({ movies }) => {
  return (
    <div className="posters">
      { movies.map(poster => (<Poster poster={poster.image} title={poster.title} key={poster.id}/>)) }
    </div>
  )
}

export default PosterRow;
