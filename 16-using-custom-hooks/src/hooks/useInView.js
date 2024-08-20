import { useLayoutEffect, useRef, useState } from 'react';

/**@type { (printLog?:boolean) => {inView, targetRef, rootRef } } */
function useInView(printLog = false) {
  const [inView, setInView] = useState(false);
  const targetRef = useRef(null);
  const rootRef = useRef(document);

  useLayoutEffect(() => {
    printLog && console.log('인터섹션 옵저버 생성, 관찰 대상 관찰하도록 설정');
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;

      if (entry.isIntersecting) {
        printLog && console.log('뷰포트(rootRef.current) 안에 진입');
        setInView(true);
      } else {
        printLog && console.log('뷰포트(rootRef.current) 밖으로 진출');
        setInView(false);
      }
    });

    const { current: targetElement } = targetRef;

    // targetRef.current 존재할 경우
    if (targetElement) {
      // 대상 요소 관찰 설정
      observer.observe(targetElement);
    } else {
      console.warn('문서에 관찰할 대상 요소가 존재하지 않습니다.');
    }

    return () => {
      printLog &&
        console.log('인터섹션 옵저버에 의해 관찰 중인 대상의 관찰을 중지 설정');
      targetElement && observer.unobserve(targetElement);
    };
  }, [printLog]);

  return { inView, targetRef, rootRef };
}

export default useInView;
