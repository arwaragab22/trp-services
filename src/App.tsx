
import { Outlet } from 'react-router';
import Header from './components/header/Header';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import News from './components/News';
import Footer from './components/Footer';

function App() {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage("ar");

  
    i18n.dir("ar"); // -> "ltr"
  },[])
  return (
    <>
      <div >
        <Header></Header>
        <Outlet />
        <News />
        <Footer />
  </div>
    </>
  );
}

export default App
