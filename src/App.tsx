import { Route, Routes } from 'react-router-dom';
import { Home, ViewApartments } from '@/pages/index';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/apartments' element={<ViewApartments />} />
      </Routes>
    </>
  );
}

export default App;
