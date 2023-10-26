import { Outlet } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <div className='w-screen max-w-lg flex flex-col  mx-auto'>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
