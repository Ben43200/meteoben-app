import './App.css';

import './css/styles.scss';


import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/NavBar'
// import DemoCarousel from './components/DemoCarousel';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      {/* <DemoCarousel /> */}
    </BrowserRouter>
  )
}

export default App;
