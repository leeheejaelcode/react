// --------------------------------------------------------------------------
// ✅ 틱택토 게임 만들기 (Game 컴포넌트)
// --------------------------------------------------------------------------
// - [x] Game 컴포넌트 내부에서 게임 플레이어 말을 게임의 상수로 설정합니다.
// - [x] 게임의 상수인 플레이어를 Game 컴포넌트에서 모듈로 불러옵니다.
// - [x] 구현할 게임의 마크업을 분석해서 하위 컴포넌트 트리를 구성합니다. (컴포넌트 추출)
// --------------------------------------------------------------------------

import './styles/main.css';
import S from './Game.module.css';
import Board from './component/Board/Board';
import History from './component/History/History';
import { useState } from 'react';
import {
  checkWinner,
  INITIAL_SQUARES,
  PLAYER,
  PLAYER_COUNT,
} from '@/tic-tac-toe/constants';
function Game() {
  // [게임 상태] --------------------------------------------------------------

  // 게임판(9개의 말판) 상태를 나타내는 리액트의 상태 선언
  const [gameHistory, setGameHistory] = useState([INITIAL_SQUARES]);
  // 게임 진행 순서
  const [gameIndex, setGameIndex] = useState(0);

  // [게임 상태 업데이트 기능] ----------------------------------------------------

  // 게임을 진행하는 함수
  const handlePlayGame = (index) => () => {
    // 사용자가 액션을 취해 게임을 진행하려 할 때?
    // 이미 게임이 종료된 경우?
    if (winnerInfo) {
      // GAME OVER 메시지를 사용자에게 출력
      alert('GAME OVER');
      // 함수 실행되지 않도록 함수 종료(return)
      return;
    }

    // -----------------------------------------------------------------
    // 다음 게임의 인덱스는?
    const nextGameIndex = gameIndex + 1;

    // 다음 게임 인덱스 상태 업데이트 요청
    setGameIndex(nextGameIndex);
    // -----------------------------------------------------------------

    // 게임 히스토리에 기록 추가

    // 아직 게임이 진행중인 경우?
    // 아래 코드 실행

    // 아직 진행 중이라면? 게임 진행 (리액트에게 렌더 요청 -> 화면 변경)
    const nextSquares = currentSquares.map((square, idx) => {
      return idx === index ? nextPlayer : square;
    });

    const nextGameHistory = [
      ...gameHistory.slice(0, nextGameIndex),
      nextSquares,
    ];

    setGameHistory(nextGameHistory);
  };

  // 시간 여행 기능
  const handleTimeTravel = (index) => {
    setGameIndex(index);
    // 게임의 히스토리 또한 되돌려야 함
  };

  // [게임 파생된 상태] ----------------------------------------------------------
  const currentSquares = gameHistory[gameIndex];

  // 게임이 끝났는가? 아니면 아직 진행 중인가?
  // 게임이 끝났다면? 게임이 끝났음을 사용자에게 고하게!
  // 반환 값에 따라 게임을 진행할 지, 아닐 지 결정
  // squares?, isPlayerOneTurn?, gameIndex?, nextPlayer?
  // const winner = checkWinner(squares);
  // console.log('승자는?', winner);
  const winnerInfo = checkWinner(currentSquares);
  // 게임 순서 (0, 1, 2, 3, ...)
  // 현재 게임 플레이어 ([0] PLAYER.ONE ↔ [1] PLAYER.TWO)
  // 첫번째 플레이어의 턴인가요?
  const isPlayerOneTurn =
    currentSquares.filter(Boolean).length % PLAYER_COUNT === 0; // true
  // 첫번째 플레이어의 턴이면 PLAYER.ONE 아니면 PLAYER.TWO
  const nextPlayer = isPlayerOneTurn ? PLAYER.ONE : PLAYER.TWO; // '🍟'

  // 게임 상황은 어떠한가?
  const isDraw = !winnerInfo && currentSquares.every(Boolean);

  // [게임 진행 상황] ---------------------------------------------------------------

  return (
    <div className={S.component}>
      <Board
        squares={currentSquares}
        winnerInfo={winnerInfo}
        nextPlayer={nextPlayer}
        onPlay={handlePlayGame}
        isDraw={isDraw}
      />
      <History
        gameHistory={gameHistory}
        gameIndex={gameIndex}
        onTimeTravel={handleTimeTravel}
      />
    </div>
  );
}

export default Game;
