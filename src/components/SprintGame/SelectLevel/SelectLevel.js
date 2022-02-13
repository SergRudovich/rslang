import './SelectLevel.css';
import React from 'react';
import { CATEGORY_COLOR } from '../../../data/const';

function SelectLevel({handleSelectLevel}) {

  return (
    <div className='sprint-level-container'>
      <div
        style={{
          backgroundColor: `${CATEGORY_COLOR[0]}`
        }}
        dataLevel='0'
      >A1</div>
      <div
        style={{
          backgroundColor: `${CATEGORY_COLOR[1]}`
        }}>A2</div>
      <div
        style={{
          backgroundColor: `${CATEGORY_COLOR[2]}`
        }}>B1</div>
      <div
        style={{
          backgroundColor: `${CATEGORY_COLOR[3]}`
        }}>B2</div>
      <div style={{
        backgroundColor: `${CATEGORY_COLOR[4]}`
      }}>C1</div>
      <div
        style={{
          backgroundColor: `${CATEGORY_COLOR[5]}`
        }}>C2</div>
    </div>
  );
}

export default SelectLevel;
