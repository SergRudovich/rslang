import React from 'react';
import './CategoryCard.css';
import { CATEGORY_COLOR } from '../../../data/const';

function CategoryCard(props) {
  const { category, range, isActive, id, toggleCard } = props;
  return (
    <div
      className='category-card-container'
      style={{
        backgroundColor: CATEGORY_COLOR[id],
        opacity: `${isActive ? '1' : '0.4'}`,
      }}
      onClick={() => toggleCard(id)}
    >
      <span>{category}</span>
      <p>{range}</p>
    </div >
  );
}

export default CategoryCard;
