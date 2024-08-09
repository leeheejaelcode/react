// 게임에서 사용되는 말(플레이어)를 상수로 정의합니다.
export const PLAYER = { ONE: '💚', TWO: '💙' };

// 스퀘어 집합: 초기 상태 값
export const INITIAL_SQUARES = Array(9).fill(null);
export const PLAYER_COUNT = Object.keys(PLAYER).length;
export const WINNER_COLOR = '#ffe166';
export const WINNER_CONDITIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// 게임판 정보와 승리 조건 비교해 결과 반환
export const checkWinner = (squares) => {
  let winnerInfo = {
    winner: null,
    condition: [],
  };

  for (const [x, y, z] of WINNER_CONDITIONS) {
    const winner = squares[x];
    // squares(x) && squares(x) === squares(y) && squares(x) === squares(z)
    if (winner && winner === squares[y] && winner === squares[z]) {
      winnerInfo = { winner, condition: [x, y, z] };
      break;
    }
  }
  return winnerInfo;
};
