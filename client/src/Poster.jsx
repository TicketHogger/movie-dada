import React from 'react';

const Poster = ({ poster, title }) => {
  return (
    <div className="posters">
      <img src={poster} />
      <h4>{title}</h4>
    </div>
  )
}

export default Poster;