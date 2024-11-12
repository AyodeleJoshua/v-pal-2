import React, { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout';
import { Spinner } from './lib';
import useFetchFromApi from './hooks/useFetchFromApi';

const DashboardHome = React.lazy(() => import('./pages/DashboardHome'));
const BudgetRoom = React.lazy(() => import('./pages/BudgetRoom'));

function App() {
  // MOCK API CALL AND DELAY
  const { isLoading } = useFetchFromApi();

  return (
    <>
      {isLoading ? (
        <div>
          <Spinner />
        </div>
      ) : (
        <DashboardLayout>
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route path="/v-pal/*">
                <Route path="dashboard" element={<DashboardHome />} />
                <Route path="budget-room" element={<BudgetRoom />} />
                <Route
                  path="*"
                  element={<Navigate to="dashboard" replace={true} />}
                />
              </Route>
              <Route
                path="*"
                element={<Navigate to="v-pal/dashboard" replace={true} />}
              />
            </Routes>
          </Suspense>
        </DashboardLayout>
      )}
    </>
  );
}

export default App;
