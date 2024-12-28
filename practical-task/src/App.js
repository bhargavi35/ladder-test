import './App.css';
import Preloader from './components/Preloader';
import Footer from './components/Footer';
import HoverCard from './components/HoverCard';
import RevolvingBox from "./components/RevolvingBox";
import FoldingBoxes from './components/FoldingBoxes';

function App() {
  return (
    <div>
      <FoldingBoxes />
      <RevolvingBox />
      <Footer />
    </div>
  );
}

export default App;
