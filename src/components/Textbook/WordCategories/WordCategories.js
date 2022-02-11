import React, { useState, useEffect } from 'react';
import './WordCategories.css';
import { useSelector, useDispatch } from "react-redux";
import CategoryCard from '../CategoryCard/CategoryCard';
import a1 from '../../../assets/img/a1.jpg';
import a2 from '../../../assets/img/a2.jpg';
import b1 from '../../../assets/img/b1.jpg';
import b2 from '../../../assets/img/b2.jpg';
import c1 from '../../../assets/img/c1.jpg';
import c2 from '../../../assets/img/c2.png';
import difficult from '../../../assets/img/difficult.jpg';
import { setWordsCategory, setWordsPage } from '../../../store/actions';

function WordCategories() {

  const [category, setCategory] = useState([
    { id: 0, category: 'Начальный A1', range: '1-600', img: a1, isActive: true },
    { id: 1, category: 'Начальный A2', range: '601-1200', img: a2, isActive: false },
    { id: 2, category: 'Средний B1', range: '1201-1800', img: b1, isActive: false },
    { id: 3, category: 'Средний B2', range: '1801-2400', img: b2, isActive: false },
    { id: 4, category: 'Продвинутый C1', range: '2401-3000', img: c1, isActive: false },
    { id: 5, category: 'Продвинутый C2', range: '3001-3600', img: c2, isActive: false },
    { id: 6, category: 'Сложные слова', range: '', img: difficult, isActive: false },
  ]);

  const dispatch = useDispatch();

  const user = useSelector(state => state.user);

  useEffect(() => {
    toggleCard(Number(localStorage.getItem('wordsCategory')), true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleCard = (id, isStart = false) => {
    const newCategory = category.map(cat => {
      if (cat.id === id) {
        cat.isActive = true;
      } else {
        cat.isActive = false;
      }
      return cat;
    });
    dispatch(setWordsCategory(id));
    setCategory(newCategory);

    if (!isStart) {
      localStorage.setItem('wordsPage', 0);
      dispatch(setWordsPage(0));
      localStorage.setItem('wordsCategory', id);
    }
  };

  return (
    <div className='word-categories-wrapper'>
      {category.map(cat => {
        if (cat.id !== 6) {
          return (<CategoryCard
            key={cat.id}
            id={cat.id}
            category={cat.category}
            range={cat.range}
            img={cat.img}
            isActive={cat.isActive}
            toggleCard={toggleCard}
          />)
        } else {
          return (user && <CategoryCard
            key={cat.id}
            id={cat.id}
            category={cat.category}
            range={cat.range}
            img={cat.img}
            isActive={cat.isActive}
            toggleCard={toggleCard}
          />)
        }
      })}
    </div>
  );
}

export default WordCategories;
