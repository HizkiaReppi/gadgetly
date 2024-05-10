import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Loading from './components/atoms/Loading';

const Homepage = lazy(() => import('./pages/Homepage'));

export default function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route
            path='/'
            element={<Homepage />}
          />
        </Routes>
      </Suspense>
      <ToastContainer />
    </>
  );
}
