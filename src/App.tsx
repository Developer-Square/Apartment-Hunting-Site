import { Route, Routes } from 'react-router-dom';
import { Home, ViewApartmentDetail, ViewApartments } from '@/pages/index';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/apartments' element={<ViewApartments />} />
        <Route path='/view-apartment/:id' element={<ViewApartmentDetail />} />
      </Routes>
    </>
  );
}

export default App;
