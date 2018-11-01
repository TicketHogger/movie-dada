import React from 'react';

const LeftArrow = ({prevSlide}) => (
  <div className="left-arrow" onClick={prevSlide}><span>◀</span></div>
)

export default LeftArrow;