import { RouterProvider, createBrowserRouter } from 'react-router-dom';
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
    path: '/note-list',
    element: <NoteList />,
  },
  {
    path: '/note-list/new',
    element: <NewNote />,
  },
  {
    path: '/note-list/detail',
    element: <NoteDetail />,
  },
];
const router = createBrowserRouter(routes);
function App() {
  return <RouterProvider router={router}>앱</RouterProvider>;
}

export default App;
