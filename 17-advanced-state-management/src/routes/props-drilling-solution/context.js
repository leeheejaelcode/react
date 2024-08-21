import { createContext } from 'react';

// 현재 페이지의 컨텍스트 생성
export const pageContext = createContext({ version: '0.0.1' });
