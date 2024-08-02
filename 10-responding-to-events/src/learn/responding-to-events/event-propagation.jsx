// --------------------------------------------------------------------------
import LayoutBox from './LayoutBox';
// ✅ 이벤트 전파
// --------------------------------------------------------------------------
// - [x] 전파 중지(개별적으로 할 수 있음)
// - [x] 전파 대안으로 핸들러 전달
// - [ ] 기본 작동 방지
// --------------------------------------------------------------------------

function EventPropagation() {
  return (
    <details>
      <summary>
        <b>이벤트 전파 &amp; 기본 작동 방지</b>
      </summary>
      <LayoutBox
        style={styles.cyan}
        onClick={(e) => {
          console.log('cyan', e.target);
        }}
      >
        <LayoutBox
          style={styles.magenta}
          onClick={(e) => {
            console.log('magenta', e.target);
          }}
        >
          <LayoutBox
            style={styles.yellow}
            onClick={(e) => {
              console.log('yellow', e.target);
            }}
          />
        </LayoutBox>
      </LayoutBox>
      {/* <div
        onClick={(e) => {
          // 이벤트 전파 중지
          e.stopPropagation();
          // 먼저 실행돼야 하는 부분은 캡쳐링이벤트로 먼저 실행되게 하기
          console.log('cyan', e.target);
        }}
        className="box"
        style={styles.cyan}
      >
        <div
          onClick={(e) => {
            // 이벤트 전파 중지
            e.stopPropagation();
            console.log('magenta', e.target);
          }}
          className="box"
          style={styles.magenta}
        >
          <div
            onClick={(e) => {
              // 이벤트 전파 중지
              e.stopPropagation();
              console.log('yellow', e.target);
            }}
            className="box"
            style={styles.yellow}
          ></div>
        </div>
      </div> */}
    </details>
  );
}

const styles = {
  cyan: {
    '--color': 'var(--cyan)',
  },
  magenta: {
    '--color': 'var(--magenta)',
  },
  yellow: {
    '--color': 'var(--yellow)',
  },
};

export default EventPropagation;
