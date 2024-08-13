import { exact, number, string } from 'prop-types';
import S from './ScrollTriggerItem.module.css';
import { useRef } from 'react';
import { animate, inView } from 'motion';
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
        animate(
          target,
          { opacity: 1 },
          {
            duration: 1,
          }
        );
        animate(
          p,
          { x: [-500, 0] },
          {
            duration: 1,
          }
        );
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
