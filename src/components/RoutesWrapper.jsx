import { lazy, Suspense } from 'react';
import { Spinner } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom'
import {  rootPathNames } from './config/pathNames';
import ProtectedRoute from './ProtectedRoute';

const HomePage = lazy(() => import('./pages/HomePage'));
const OrdersPage = lazy(() => import('./pages/Orders'));
const RoutesWrapper = () => (
  <Suspense fallback={<Spinner />}>
    <Routes>
      <Route
        path={rootPathNames.homepage}
        element={<ProtectedRoute component={HomePage} isProtected={false} />}
      />
       <Route
        path={rootPathNames.orders}
        element={<ProtectedRoute component={OrdersPage} isProtected={false} />}
      />
    </Routes>
  </Suspense>
);

export default RoutesWrapper;
