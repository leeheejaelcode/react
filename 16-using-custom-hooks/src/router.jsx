import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from 'react-router-dom';
import Home from '@/page/Home';
import NoteList from '@/page/NoteList';
import NewNote from '@/page/NewNote';
import NoteDetail from '@/page/NoteDetail';

// 최신 문법
const routes = [
  // routes
  // {path?: string, element?: React.node | null }
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/notes',
    element: <NoteList />,
  },
  {
    path: '/notes/new',
    element: <NewNote />,
  },
  {
    path: '/notes/detail',
    element: <NoteDetail />,
  },
];
// const router = createBrowserRouter(routes);

// 레가시 코드
const routersFromElement = createRoutesFromElements(
  <>
    <Route path="/" element={<Home />} />
    <Route path="/notes" element={<NoteList />} />
    <Route path="/notes/new" element={<NewNote />} />
    <Route path="/notes/detail" element={<NoteDetail />} />
  </>
);
const router = createBrowserRouter(routersFromElement);

export default router;
