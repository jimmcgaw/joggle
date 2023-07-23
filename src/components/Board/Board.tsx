import React, { FC } from 'react';

import weightedSampler from '../../data/Sampler';
import Grid from '../Grid/Grid';

interface BoardProps {}

const styles = {
  'width': '400px',
  'height': '400px',
  'margin': '100px auto',
};

const Board: FC<BoardProps> = () => {

  const randomLetters: string[] = [];

  for (let i = 0; i < 16; i++) {
    randomLetters.push(weightedSampler.get());
  }

  return (
    <div data-testid="Board" style={styles}>
      <Grid characters={randomLetters}></Grid>
    </div>
  );
  
}

export default Board;
