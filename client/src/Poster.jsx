import React from 'react';

const Poster = ({ poster, title, year }) => {
  year === 2018 ? year = '(' + year + ')' : year = '';
  return (
    <div className="frame">
      <div className="outer">
        <img src={poster} />
      </div>
      <h4>{title} {year}</h4>
    </div>
  )
}

export default Poster;