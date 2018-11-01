import React from 'react';
import styles from './Styles.css';

const LeftArrow = ({prevSlide}) => (
  <div className="left-arrow" onClick={prevSlide}><span>◀</span></div>
)

export default LeftArrow;