import Squares from '../Squares/Squares';
import Status from '../Status/Status';
import S from './Board.module.css';
import { bool, func } from 'prop-types';
import {
  OneOfPlayerListType,
  OneOfPlayerType,
  WinnerInfoType,
} from '@/tic-tac-toe/types/type.d';

Board.propTypes = {
  winnerInfo: WinnerInfoType,
  nextPlayer: OneOfPlayerType.isRequired,
  isDraw: bool.isRequired,
  squares: OneOfPlayerListType.isRequired,
  onPlay: func,
};

function Board({ squares, winnerInfo, isDraw, onPlay, nextPlayer }) {
  return (
    <div className={S.component}>
      <Status
        winner={winnerInfo?.winner}
        nextPlayer={nextPlayer}
        isDraw={isDraw}
      />
      <Squares squares={squares} winnerInfo={winnerInfo} onPlay={onPlay} />
    </div>
  );
}

export default Board;
