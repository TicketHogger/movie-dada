import React from 'react';
import Poster from './Poster.jsx';

const PosterRow = ({ movies }) => {
  return (
    <div>
      { movies.map(el => (<Poster poster={el.image} title={el.title} key={el.id}/>)) }
    </div>
  )
}

export default PosterRow;
