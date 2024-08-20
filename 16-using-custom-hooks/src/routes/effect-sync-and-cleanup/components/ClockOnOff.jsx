import { bool, func } from 'prop-types';
import S from './ClockOnOff.module.css';
import useDocumentTitle from '@/hooks/useDocumentTitle';
import useClock from '@/hooks/useClock';
import { useOutletContext } from 'react-router-dom';

ClockOnOff.propTypes = {
  isOn: bool,
  onToggle: func,
};

function ClockOnOff() {
  const documentTitle = '시계 ON/OFF ⬅️ 이펙트 동기화 & 정리';
  useDocumentTitle(documentTitle);
  const { isOn, onToggle } = useOutletContext();

  const buttonLabel = isOn ? 'OFF' : 'ON';
  // 타임 상태 선언
  // const [time, setTime] = useState(new Date());

  // 타임 업데이트 이펙트
  // useEffect(() => {
  //   const clearId = setInterval(() => {
  //     const nextTime = new Date();
  //     setTime(nextTime);
  //   }, 1000);

  //   return () => {
  //     clearInterval(clearId);
  //   };
  // }, []);

  const time = useClock();

  return (
    <div className={S.component}>
      <button type="button" lang="en" onClick={onToggle}>
        CLOCK {buttonLabel}
      </button>
      <output hidden={!isOn}>{time.toLocaleTimeString()}</output>
    </div>
  );
}

export default ClockOnOff;
