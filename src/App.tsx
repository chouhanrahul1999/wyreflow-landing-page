import './App.css'
import Hero from './components/Hero';
import Industry from './components/Industry';
import Navbar from './components/Navbar';
import Slide from './components/Slide';
import VideoRaper from './components/VideoRaper';
import Welcome from './components/Welcome';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <VideoRaper />
      <Welcome />
      <Industry />
      <Slide />
    </div>
    
  );
}

export default App
