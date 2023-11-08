import './App.css';

import './css/styles.scss';
import './css/common.scss'


import { BrowserRouter } from 'react-router-dom'
// import Navbar from './components/NavBar'
import Home from './pages/Home'
// import DemoCarousel from './components/DemoCarousel';

const App = () => {
  return (
    <BrowserRouter>
      <Home />
      {/* <DemoCarousel /> */}
    </BrowserRouter>
  )
}

export default App;
