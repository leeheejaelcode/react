// --------------------------------------------------------------------------
// ✅ 클록(시계) ON/OFF // 정리
// --------------------------------------------------------------------------
// - [x] 1초마다 시간 정보를 화면에 업데이트하도록 이펙트를 작성합니다. (타이머 API 사용)
// - [ ] 컴포넌트가 언마운트 된 이,후 남은 이펙트를 깨끗하게 정리합니다.
// --------------------------------------------------------------------------

import { useState, useEffect } from 'react';
import { bool, func } from 'prop-types';
import S from './ClockOnOff.module.css';

ClockOnOff.propTypes = {
  isOn: bool,
  onToggle: func,
};

// 이벤트 구독
const intervalId = setInterval(() => {
  console.log(new Date().toLocaleTimeString());
}, 1000);

// 이벤트 구독 취소
clearInterval(intervalId);

function ClockOnOff({ isOn = false, onToggle }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log(time.toLocaleTimeString());
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, [time]);

  return (
    <div className={S.component}>
      <button lang="en" type="button" onClick={onToggle}>
        CLOCK {isOn ? 'OFF' : 'ON'}
      </button>
      <output hidden={!isOn}>{time.toLocaleTimeString()}</output>
    </div>
  );
}

export default ClockOnOff;
