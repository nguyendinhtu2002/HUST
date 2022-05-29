import logo from './logo.svg';
import './App.css';
import { Header } from './pages/Header';
import { HeaderBt } from './pages/HeaderBt';
import {Slider} from './pages/Carousel';
function App() {
  return (
  
    <div className="App">
      <Header />
      <HeaderBt/>
      {/* <Slider/> */}
    </div>
    
  );
}

export default App;
