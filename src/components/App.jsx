import { lazy , Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Navigation = lazy( () => import('./Navigation'));
const HomePage = lazy( () => import('./Home'));
const SearchPage = lazy( () => import('./Search'));
const AccountPage = lazy( () => import('./Account'));

function App() {
  return (
    <Router>
      <Navigation/>
      <Suspense fallback='Loading...'>
        <Routes>
          <Route path='/' component={HomePage} />
          <Route path='/search' component={SearchPage} />
          <Route path='/login' component={AccountPage} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
