import { RouterProvider } from 'react-router-dom';
import router from '@/routes/router';
import { StrictMode } from 'react';
function App() {
  return (
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}

export default App;
