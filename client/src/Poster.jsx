import React from 'react';
import styles from './Styles.css';

const Poster = ({ poster, title, year }) => {
  year === 2018 ? year = '(' + year + ')' : year = '';
  return (
    <div className="frame">
      <img src={poster} />
      <h4>{title} {year}</h4>
    </div>
  )
}

export default Poster;