import Squares from '../Squares/Squares';
import Status from '../Status/Status';
import S from './Board.module.css';

function Board() {
  return (
    <div className={S.component}>
      <Status />
      <Squares />
    </div>
  );
}

export default Board;
