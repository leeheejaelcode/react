// --------------------------------------------------------------------------
// ✅ 틱택토 게임 만들기 (Status 컴포넌트)
// --------------------------------------------------------------------------
// - [ ]
// --------------------------------------------------------------------------

import { OneOfPlayerType } from '@/tic-tac-toe/types/type.d';
import S from './Status.module.css';
import { bool } from 'prop-types';

Status.propTypes = {
  winner: OneOfPlayerType,
  nextPlayer: OneOfPlayerType.isRequired,
  isDraw: bool,
};

function Status({ winner, nextPlayer, isDraw = false }) {
  let statusMessage = `다음 플레이어 : ${nextPlayer}`;
  if (winner) statusMessage = `위너!! ${winner}`;
  if (isDraw) statusMessage = `웁스... 비겼네... 😩 한 판 더?!`;
  return <h2 className={S.component}>{statusMessage}</h2>;
}

export default Status;
