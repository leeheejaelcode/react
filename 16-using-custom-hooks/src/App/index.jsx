import { createBrowserRouter } from 'react-router-dom';

const routes = [
  // routes
  // {path?: string, element?: ReactNode.element | null }
  {
    path: '/',
    element: (
      <div>
        <p></p>
      </div>
    ),
  },
];
const router = createBrowserRouter(routes);
console.log(router);
function App() {
  return <>앱</>;
}

export default App;
