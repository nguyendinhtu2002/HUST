import './App.css';
import { Header } from './pages/Header';
import { HeaderBt } from './pages/HeaderBt';
import {Slider} from './pages/Carousel';
import { Content } from './pages/Content';
import { News } from './pages/News';
import { DaoTao } from './pages/Daotao';
import { CuuSv } from './pages/CuuSv';
import { Banner } from './pages/Banner';
import { Footer } from './pages/Footer';
import { Talk } from './pages/Talk';
import { Contact } from './pages/Contact';
import { Video } from './pages/Video';
function App() {
  return (
  
    <div className="App">
      <Header />
      <HeaderBt/>
      <Slider/>
      <Content/>
      <News/>
      <DaoTao/>
      <Banner/>
      <CuuSv/>
      <Talk />
      <Contact/>
      <Video />
      <Footer/>
    

    </div>
    
  );
}

export default App;
