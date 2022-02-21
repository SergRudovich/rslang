import React from 'react';
import PropTypes from 'prop-types';
import { VolumeUpRounded } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';
import './FinishGameItemView.css';
import { getFilePath } from '../../../../data/functions';

const FinishGameItemView = ({ word }) => {
  const audioElement = new Audio(getFilePath(word.audio));
  return (
    <div className='containerB'>
      <IconButton aria-label="audio" onClick={() => audioElement.play()}>
        <VolumeUpRounded fontSize="large" />
      </IconButton>
      <p className='text'>{word.word}</p>
    </div>
  );
};

FinishGameItemView.propTypes = {
  word: PropTypes.object,
};

export default FinishGameItemView;
