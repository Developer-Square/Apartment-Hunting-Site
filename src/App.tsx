import { Route, Routes } from 'react-router-dom';
import {
  Account,
  Home,
  ViewApartmentDetail,
  ViewApartments,
} from '@/pages/index';
import PersonalInfo from '@/components/profile/PersonalInfo';
import EditAccount from '@/components/profile/EditAccount';
import Payments from '@/components/profile/Payments';
import LoginAndSecurity from './components/profile/Login&Security';
import GiftCards from '@/components/gift-cards';
import HowWebsiteWorks from '@/components/support/HowWebsiteWorks';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/apartments' element={<ViewApartments />} />
        <Route path='/view-apartment/:id' element={<ViewApartmentDetail />} />
        <Route path='/account' element={<Account />} />
        <Route path='/account/personal-info' element={<PersonalInfo />} />
        <Route path='/account/edit-account' element={<EditAccount />} />
        <Route path='/payments' element={<Payments />} />
        <Route path='/login-and-security' element={<LoginAndSecurity />} />
        <Route path='/account/gift-cards' element={<GiftCards />} />
        <Route
          path='/account/how-website-works'
          element={<HowWebsiteWorks />}
        />
      </Routes>
    </>
  );
}

export default App;
