import '../style/App.css';
import { CarouselC } from './CarouselC';
import { Footer } from './Footer';
import { Navb} from './Navb';

function App() {
  return (
    <div className="App">
      <Navb/>
      <CarouselC/>
      <Footer/>
    </div>
  );
}

export default App;
