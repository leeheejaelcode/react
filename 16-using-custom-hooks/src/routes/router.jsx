// React Router 라이브러리를 사용한 싱글 페이지 앱 제작
// 실습 진행 (30분까지 진행)

import { createBrowserRouter } from 'react-router-dom';

// 레이아웃
import RootLayout from '@/components/RootLayout';

// 페이지
import SyncDocumentTitle from './sync-document-title';
import SyncWebStorage from './sync-web-storage';
import EffectSyncAndCleanup from './effect-sync-and-cleanup';
import ScrollTriggerEffect from './scroll-trigger-effect';
import SyncBackend from './sync-backend';
import CheckOnOffline from './check-on-offline';

// 페이지 내부 컴포넌트
import PrintMousePosition from './effect-sync-and-cleanup/components/PrintMousePosition';
import ClockOnOffWrapper from './effect-sync-and-cleanup/components/ClockOnOffWrapper';
import UselessCheckbox from './effect-sync-and-cleanup/components/UselessCheckbox';
import { createRoutesFromElements } from 'react-router-dom';
import { Route } from 'react-router-dom';

import ClockOnOff from './effect-sync-and-cleanup/components/ClockOnOff';
import DataFetchingUsingUseFetchHook from './data-fetch-using-use-fetch-hook';
import CounterAPP from './counter-app-use-counter';

// 루트(경로 집합)

const __routes = [
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <SyncDocumentTitle /> },
      { path: 'sync-web-storage', element: <SyncWebStorage /> },
      {
        path: 'effect-sync-and-cleanup',
        element: <EffectSyncAndCleanup />,
        children: [
          {
            index: true,
            element: <PrintMousePosition />,
          },
          {
            path: 'clock',
            element: <ClockOnOffWrapper />,
          },
          {
            path: 'useless-checkbox',
            element: <UselessCheckbox />,
          },
        ],
      },
      { path: 'scroll-trigger-effect', element: <ScrollTriggerEffect /> },
      { path: 'sync-backend', element: <SyncBackend /> },
      { path: 'check-on-offline', element: <CheckOnOffline /> },
    ],
  },
];

// [중첩된 루트 설정]
// /effect-sync-and-cleanup                   : index - 마우스 위치 추적
// /effect-sync-and-cleanup/clock             : clock - 시계 ON/OFF
// /effect-sync-and-cleanup/useless-checkbox  : useless-checkbox - 쓸모없는 체크박스

const routes = createRoutesFromElements(
  <Route path="/" element={<RootLayout />}>
    <Route index element={<SyncDocumentTitle />} />
    <Route path="sync-web-storage" element={<SyncWebStorage />} />
    <Route path="effect-sync-and-cleanup" element={<EffectSyncAndCleanup />}>
      <Route index element={<PrintMousePosition />} />
      <Route path="clock" element={<ClockOnOff />} />
      <Route path="useless-checkbox" element={<UselessCheckbox />} />
    </Route>
    <Route path="scroll-trigger-effect" element={<ScrollTriggerEffect />} />
    <Route path="sync-backend" element={<SyncBackend />} />
    <Route path="check-on-offline" element={<CheckOnOffline />} />
    <Route path="data-fetching" element={<DataFetchingUsingUseFetchHook />} />
    <Route path="counter-app" element={<CounterAPP />} />
  </Route>
);

// 라우터
const router = createBrowserRouter(routes);

// 라우터 내보내기
export default router;
