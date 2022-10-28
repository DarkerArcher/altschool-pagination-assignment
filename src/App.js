import { ErrorBoundary } from 'react-error-boundary';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Error, ErrorFallback, Home, Users } from './components';

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path='/users' element={<Users />} />
        </Route>
        <Route path='*' element={<Error />} />
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
