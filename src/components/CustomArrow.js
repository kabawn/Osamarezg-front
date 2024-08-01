import React from 'react';

export const CustomPrevArrow = ({ onClick }) => {
  return (
    <div className="custom-arrow custom-prev" onClick={onClick}>
      <i className="fas fa-chevron-left"></i>
    </div>
  );
};

export const CustomNextArrow = ({ onClick }) => {
  return (
    <div className="custom-arrow custom-next" onClick={onClick}>
      <i className="fas fa-chevron-right"></i>
    </div>
  );
};
