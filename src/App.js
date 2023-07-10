
import styles from './App.module.css';
import { Header } from './components/Header/Header';
// import { useState } from 'react';
import { Main } from './components/Main/Main';
import { Footer } from './components/Footer/Footer';

function App() {

  // const [showMenu, setShowMenu] = useState(false)

  return (
    <div className={styles.container}>
      
      <Header  />
      
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;


// showMenu={showMenu} setShowMenu={setShowMenu}
