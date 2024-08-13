import { exact, number, string } from 'prop-types';
import S from './ScrollTriggerItem.module.css';
import { useRef } from 'react';
import { animate, inView, timeline } from 'motion';
ScrollTriggerItem.propTypes = {
  item: exact({
    id: number.isRequired,
    image: string.isRequired,
    text: string.isRequired,
  }).isRequired,
};

function ScrollTriggerItem({ item }) {
  const pRef = useRef(null);
  const setScrollTrigger = (el) => {
    const p = el.querySelector('p');

    if (el)
      inView(el, ({ target }) => {
        // animate(
        //   target,
        //   { opacity: 1 },
        //   {
        //     duration: 1,
        //   }
        // );
        // animate(
        //   p,
        //   { x: [-500, 0] },
        //   {
        //     duration: 1,
        //   }
        // );
        // 타임라인 애니메이션

        const sequence = [
          [target, { opacity: [0, 1] }, { duration: 0.6 }],
          [p, { opacity: [0, 1], y: [20, 0] }, { duration: 0.6 }],
        ];
        const options = {
          easing: 'ease-in-out',
        };
        const animation = timeline(sequence, options);
        // inView()함수에 설정된 콜백 함수가 반환하는 함수는
        // 엘리먼트가 뷰포트를 벗어났을 때 실행함

        return () => {
          animation.stop();
        };
      });
  };

  return (
    <article
      ref={setScrollTrigger}
      className={S.component}
      style={{ background: `url(${item.image}) no-repeat center / cover` }}
    >
      <p className={S.text} ref={pRef}>
        {item.text}
      </p>
    </article>
  );
}

export default ScrollTriggerItem;
