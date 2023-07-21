import React, { FC } from 'react';
import { BoardWrapper } from './Board.styled';

interface BoardProps {}

const Board: FC<BoardProps> = () => (
 <BoardWrapper data-testid="Board">
    Board Component
 </BoardWrapper>
);

export default Board;
