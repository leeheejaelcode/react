import { createBrowserRouter } from 'react-router-dom';
import Home from '@/page/Home';
import NoteList from '@/page/NoteList';
import NewNote from '@/page/NewNote';
import NoteDetail from '@/page/NoteDetail';
import ErrorPage from '@/page/Error';
import NoteErrorPage from '@/page/NoteErrorPage';
import RootLayout from '@/page/layout/RootLayout';
import NoteLayout from '@/page/layout/NoteLayout';

// 최신 문법
const routes = [
  // routes
  // {path?: string, element?: React.node | null }
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'notes',
        element: <NoteLayout />,
        errorElement: <NoteErrorPage />,
        children: [
          {
            index: true,
            element: <NoteList />,
          },
          {
            path: 'new',
            element: <NewNote />,
          },
          {
            path: 'detail',
            element: <NoteDetail />,
          },
        ],
      },
    ],
  },
];
const router = createBrowserRouter(routes);

// 레가시 코드
// const routersFromElement = createRoutesFromElements(
//   <>
//     <Route path="/" element={<Home />} />
//     <Route path="/notes" element={<NoteList />} />
//     <Route path="/notes/new" element={<NewNote />} />
//     <Route path="/notes/detail" element={<NoteDetail />} />
//   </>
// );
// const router = createBrowserRouter(routersFromElement);

export default router;
