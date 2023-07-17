
import styles from './App.module.css';
import { Header } from './components/Header/Header';

import { Main } from './components/Main/Main';
import { Footer } from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import { FamilyRelocation } from './components/FamilyRelocation/FamilyRelocation';
import { useLocation } from 'react-router-dom'
import { Contact } from './components/Main/Contact/Contact';
import { Partners } from './components/Main/Partners/Partners';
import { QuestionCarousel } from './components/Main/Questions/QuestionCarousel.js/QuestionCarousel';
import { BusinessRelocation } from './components/BusinessRelocation/BusinessRelocation';
import { InvestmentsRelocation } from './components/InvestmentsRelocation/InvestmentsRelocation';


function App() {
  let { state: stateLocation } = useLocation();
  

  // const [showMenu, setShowMenu] = useState(false)

  return (
    <div className={styles.container}>

      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/investments' element={<InvestmentsRelocation />} />
        <Route path='/business' element={<BusinessRelocation />} />
        <Route path='/family' element={<FamilyRelocation />} />

      </Routes>
      {!stateLocation &&
        <>
          <Contact />
          <Partners />
          <QuestionCarousel />
        </>}

      <Footer />
    </div>
  );
}

export default App;


// showMenu={showMenu} setShowMenu={setShowMenu}
