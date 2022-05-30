import logo from './logo.svg';
import './App.css';
import { Header } from './pages/Header';
import { HeaderBt } from './pages/HeaderBt';
import {Slider} from './pages/Carousel';
import { Content } from './pages/Content';
function App() {
  return (
  
    <div className="App">
      <Header />
      <HeaderBt/>
      <Slider/>
      <Content/>
    </div>
    
  );
}

export default App;
