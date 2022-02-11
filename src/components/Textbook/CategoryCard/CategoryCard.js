import React from 'react';
import './CategoryCard.css';

function CategoryCard(props) {
  const { category, range, img, isActive, id, toggleCard } = props;
  return (
    <div
      className='category-card-container'
      style={{
        backgroundImage: `url(${img})`,
        opacity: `${isActive ? '1' : '0.4'}`,
      }}
      onClick={() => toggleCard(id)}
    >
      <span>{category}</span>
      <p>{range}</p>
    </div>
  );
}

export default CategoryCard;
