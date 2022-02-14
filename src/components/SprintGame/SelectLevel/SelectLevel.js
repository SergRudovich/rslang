import './SelectLevel.css';
import React, { useState } from 'react';
import { CATEGORY_COLOR } from '../../../data/const';

function SelectLevel({ handleSelectLevel }) {

  const [category, setCategory] = useState([
    { id: 0, category: 'A1', isActive: false },
    { id: 1, category: 'A2', isActive: false },
    { id: 2, category: 'B1', isActive: false },
    { id: 3, category: 'B2', isActive: false },
    { id: 4, category: 'C1', isActive: false },
    { id: 5, category: 'C2', isActive: false },
  ]);

  const handleClick = (id) => {
    const newCategory = category.map(cat => {
      if (cat.id === id) {
        cat.isActive = true;
      } else {
        cat.isActive = false;
      }
      return cat;
    });
    setCategory(newCategory);
    handleSelectLevel(id);
  }

  const CatItem = ({ id, category, isActive, handleClick }) => {
    const click = () => {
      handleClick(id)
    }
    return (
      <div
        style={{
          backgroundColor: `${CATEGORY_COLOR[id]}`,
          opacity: (isActive) ? '1' : `0.5`,
          transform: (isActive) ? 'scale(1.2)' : 'scale(1)'
        }}
        onClick={click}
      >{category}</div>
    )
  }

  return (
    <div className='sprint-level-container'>
      {category.map(cat =>
        <CatItem
          key={cat.id}
          id={cat.id}
          category={cat.category}
          isActive={cat.isActive}
          handleClick={handleClick}
        />
      )}
    </div>
  );
}

export default SelectLevel;
