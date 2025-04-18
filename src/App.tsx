import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { useAuth0 } from '@auth0/auth0-react';
import DashboardPage from './pages/dashboard';
import AuthenticationGuard from './components/AuthenticationGuard';
import TaskProvider from './components/TaskProvider';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {

  const { isLoading } = useAuth0();

  if(isLoading) return (<div>Loading...</div>)

  return (
    <TaskProvider>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/dashboard' element={<AuthenticationGuard component={DashboardPage} />} />
      </Routes>
      </TaskProvider>
  );
};

export default App;
