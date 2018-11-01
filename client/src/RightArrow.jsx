import React from 'react';

const RightArrow = ({nextSlide}) => (
  <div className="right-arrow" onClick={nextSlide}><span>▶</span></div>
)

export default RightArrow;