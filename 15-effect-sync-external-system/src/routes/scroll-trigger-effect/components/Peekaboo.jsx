// --------------------------------------------------------------------------
// ✅ 스크롤 트리거 이펙트
// --------------------------------------------------------------------------
// - [ ] 코드 해설
// - [ ] sectionMapRef 참조 객체에 순환된 <section> 요소를 Map 데이터로 수집합니다.
// - [ ] 랜덤 <section> 요소가 뷰포트 안에 들어왔는 지 확인합니다. (IntersectionObserver)
// - [ ] 랜덤 <section> 요소가 뷰포트 안에 있으면 피카부(까꿍) 애니메이션 발동되도록 구현합니다.
// --------------------------------------------------------------------------

import { useEffect, useRef, useState } from 'react';
import { animate, spring } from 'motion';
import S from './Peekaboo.module.css';
import { getRandomMinMax } from '@/utils';

function Peekaboo() {
  const [sections] = useState(Array(9).fill(null));

  const [peekaboo] = useState(true);

  const [randomIndex] = useState(() => {
    const min = 4;
    const max = sections.length;
    const randomIndex = getRandomMinMax(min, max);
    return randomIndex;
  });

  const peekabooRef = useRef(null);

  const renderPeekaboo = (idx) =>
    idx === randomIndex ? (
      <span ref={peekabooRef} className={S.peekaboo}>
        👻
      </span>
    ) : null;

  useEffect(() => {
    const peekabooCharacter = peekabooRef.current;

    if (peekaboo) {
      animate(
        peekabooCharacter,
        { x: [1000, 0], opacity: 1 },
        {
          delay: 0.5,
          easing: spring({ stiffness: 800, damping: 15, mass: 2 }),
        }
      );
    } else {
      animate(peekabooCharacter, { x: [0, 1000], opacity: 0 });
    }
  }, [peekaboo]);

  // 스크롤 트리어 이펙트
  useEffect(() => {
    const targetIndex = randomIndex - 1;
    const targetSectionElements = Array.from(sectionsRef.current.values());
    const targetSectionElement = targetSectionElements.at(targetIndex);
    // 인터섹션 옵저버 객체 생성
    const intersectionObserver = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        console.log('뷰포트 안에 보인다');
      } else {
        console.log('뷰포트 안에 안보인다');
      }
    });

    // 관찰한 대상
    // 뷰포트 안에 관찰 대상이 진입했는 지, 진출했는 지 감지
    intersectionObserver.observe(targetSectionElement);
    return () => {
      intersectionObserver.unobserve(targetSectionElement);
    };
  }, [randomIndex]);

  // ref 참조 {current : 섹션 집합 수집}
  // 1. map
  // 2. Array

  const sectionsRef = useRef(null);

  const getSectionMap = () => {
    if (!sectionsRef.current) {
      sectionsRef.current = new Map();
    }
    return sectionsRef.current;
  };

  const collectSections = (key, sectionElement) => {
    const sectionMap = getSectionMap();
    if (sectionElement) {
      sectionMap.set(key, sectionElement);
    } else {
      sectionMap.delete(key);
    }
  };

  return (
    <div className={S.component}>
      {sections.map((section, index) => {
        const idx = index + 1;
        const styles = { backgroundColor: `var(--purple-${idx}00)` };

        return (
          <section
            key={index}
            ref={collectSections.bind(null, index)}
            className={S.section}
            style={styles}
          >
            {idx}
            {renderPeekaboo(idx)}
          </section>
        );
      })}
    </div>
  );
}

export default Peekaboo;
