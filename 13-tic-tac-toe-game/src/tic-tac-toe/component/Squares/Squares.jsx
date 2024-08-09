// --------------------------------------------------------------------------
// ✅ 틱택토 게임 만들기 (Squares 컴포넌트)
// --------------------------------------------------------------------------
// - [x] squares 배열 데이터를 게임의 상수로 설정합니다.
// - [x] squares 배열 데이터의 초기 상태 값은 9개의 `null`로 구성합니다.
// - [x] squares 배열 데이터 모듈을 불러온 후, 순환해 Sqaure 컴포넌트를 리스트 렌더링 합니다.
// - [x] 게임 진행을 처리하는 함수 로직을 작성하고, 리액트 에게 다음 상태 변경에 대해 말해주세요.
// - [x] 게임 진행을 처리하는 함수 로직을 작성하고, 리액트 에게 다음 상태 변경에 대해 말해주세요.
// --------------------------------------------------------------------------

import {
  PLAYER,
  INITIAL_SQUARES,
  PLAYER_COUNT,
  WINNER_CONDITIONS,
  checkWinner,
  WINNER_COLOR,
} from '@/tic-tac-toe/constants';
import S from './Squares.module.css';
import { useState } from 'react';
import Square from '../Square/Square';

function Squares() {
  // [게임 상태] --------------------------------------------------------------

  // 게임판(9개의 말판) 상태를 나타내는 리액트의 상태 선언
  const [squares, setSquares] = useState(INITIAL_SQUARES);
  // [게임 상태 업데이트 기능] ----------------------------------------------------

  // 게임을 진행하는 함수
  // 클로저 사용이유
  // 클로저를 사용하는 이유는 바로 handlePlay 함수가 즉시 실행되는 것을 방지하기 위해서입니다.
  // const playGame = (index) => () => {
  //   // 게임 상태 변경 -> 리액트에게 렌더 트리거(요청) -> 리액트는 컴포넌트 다시 렌더링 -> 렌더 트리
  //   // -> 리액트 돔 이전 렌더 트리 현재 렌더 트리 비교 -> 차이가 발견 -> 실제 DOM 커밋(변경된 부분만 패치)
  //   // ----------------------------------------------------------------------------
  //   // 리액트 렌더링 프로세스 플로우(진행 흐름)
  //   // ----------------------------------------------------------------------------
  //   // 상태 업데이트 (direct)
  //   const nextSquare = squares.map((square, i) => {
  //     return i === index ? currentPlayer : square;
  //   });
  //   setSquares(nextSquare);
  //   // 상태 업데이트 (callback)
  //   // setSquares((prevSquares) => {
  //   //   // 이전 스퀘어 집합을 순환해서
  //   //   // 다음 번 컴포넌트 렌더링 시, 전달 된 현재 시점의 상태
  //   //   const nextSquares = prevSquares.map((square, i) =>
  //   //     // 개벌 스퀘어의 인덱스와 사용자 행동에 따라 선택된 인덱스를 비교한다.
  //   //     i === index ? currentPlayer : square
  //   //   );
  //   //   // 반환한 값이 다음 번 렌더링에서의 상태 값
  //   //   return nextSquares;
  //   // });
  // };
  const winnerInfo = checkWinner(squares);

  const handlePlayGame = (index) => () => {
    setSquares(
      squares.map((square, i) => (i === index ? currentPlayer : square))
    );
    // if(winner.winner !== null) {

    // }
  };

  // const handlePlayGame = (index) => () => {
  //   const nextSquares = squares.map((square, i) =>
  //     i === index ? currentPlayer : square
  //   );
  //   setSquares(nextSquares);
  // };

  // [게임 파생된 상태] ----------------------------------------------------------
  // handlePlayGame 밖으로 뺀 이유는 checkWinner 함수의 결과가 이 전 시점의 정보를 가져오기 때문에
  // 최신 상태의 정보를 가져오기 위해서다

  // console.log({ winner });

  // 게임 순서
  // 게임의 진행률을 filter로 찾음
  // 누를때마다 square에 값이 채워지고 filter를 통해서 값이 null이 아닌 true인 애들만을 가져옵니다
  // 그리고 그 값을 전체 플레이어 수로 나누게되면 0과 1로 나옴
  const gameIndex = squares.filter((s) => s).length % PLAYER_COUNT;
  // 그 값을 통해서 게임의 순서를 정합니다
  // 현재 게임 플레이어
  const isPlayerOneTurn = gameIndex % PLAYER_COUNT === 0;
  const currentPlayer = isPlayerOneTurn ? PLAYER.ONE : PLAYER.TWO;

  return (
    <div className={S.component}>
      {squares.map((square, index) => {
        const winnerStyles = {
          backgroundColor: null,
          scale: 1,
        };

        // 게임 승자가 있나요?
        // 승자가 있군요 승자의 조건을 알려주세요
        // 그럼 승자의 스퀘어(말판)에 색칠을 할께요!

        if (winnerInfo.winner !== null) {
          const {
            condition: [x, y, z],
          } = winnerInfo;

          if (index === x || index === y || index === z) {
            winnerStyles.backgroundColor = WINNER_COLOR;
          }
        }

        return (
          <Square
            key={index}
            onPlay={handlePlayGame(index)}
            style={winnerStyles}
          >
            {square}
          </Square>
        );
      })}
    </div>
  );
}

export default Squares;
