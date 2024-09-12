import { Outlet } from 'react-router';

import Header from '../components/layout/Header/Header';
import Footer from '../components/layout/Footer/Footer';

const LandingPageLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default LandingPageLayout;
