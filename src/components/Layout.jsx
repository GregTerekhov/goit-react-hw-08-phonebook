import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <main>
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </main>
  );
};
