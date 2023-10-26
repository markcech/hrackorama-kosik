import { createRoot } from 'react-dom/client';
import Banner from './components/Banner';
import Cart from './components/Cart';
import Header from './components/Header';
import './style.css';
import {SettingsContext} from './settings-context';

const App = () => {
  return (
    <SettingsContext.Provider value={{ currency:'CZK' }}>
    <div className="container">
      <Header />
      <Banner />
      <Cart />
    </div>
    </SettingsContext.Provider>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
