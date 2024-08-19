import { createBrowserRouter } from 'react-router-dom';
import Home from '@/page/Home';
import NoteList from '@/page/NoteList';
import NewNote from '@/page/NewNote';
import NoteDetail from '@/page/NoteDetail';
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
const router = createBrowserRouter(routes);

export default router;
