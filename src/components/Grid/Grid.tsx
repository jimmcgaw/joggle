import React, { FC } from 'react';
import GridLetter from '../GridLetter/GridLetter';


interface GridProps {
  characters: string[];
}

const styles = {
  'display': 'flex',
  'flexFlow': 'row wrap',
  'justifyContent': 'space-evenly',
  'alignItems': 'space-evenly',
}

const Grid: FC<GridProps> = ({ characters }) => (
  <div data-testid="Grid" style={styles}>
    {characters.map((character, index) => {
      return <GridLetter character={character} key={index}></GridLetter>
    })}
  </div>
);

export default Grid;
