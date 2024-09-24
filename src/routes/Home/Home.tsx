import { Helmet } from 'react-helmet';
import { HelmetProvider } from 'react-helmet-async';

import Catalog from '../../components/ui/Catalog/Catalog';
import Hero from '../../components/ui/Hero/Hero';
import Faq from '../../components/ui/Faq/Faq';

const Home = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Catalog | Goods4you</title>
          <meta
            name="description"
            content="Any products from famous brands with worldwide delivery"
          />
        </Helmet>
        <main>
          <Hero />
          <Catalog />
          <Faq />
        </main>
      </HelmetProvider>
    </>
  );
};

export default Home;
