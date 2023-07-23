import React, { FC } from 'react';


interface GridLetterProps {
  character: string;
}

const styles = {
  'width': '90px',
  'height': '90px',
  'border': 'solid 1px #666',
  'color': '#333',
  'marginBottom': '5px',
};

const letterStyles = {
  'display': 'flex',
  'alignItems': 'center',
  'justifyContent': 'center',
  'fontSize': '4.2em',
};

const GridLetter: FC<GridLetterProps> = ({ character }) => (
  <div data-testid="GridLetter" style={styles}>
    <div style={letterStyles}>
      {character}
    </div>
  </div>
);

export default GridLetter;
