import { Routes, Route } from 'react-router-dom';
import Home from './routes/home';
import Liked from './routes/liked';
import Music from './routes/music';
import Podcasts from './routes/podcasts';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/music' element={<Music />} />
      <Route path='/podcasts' element={<Podcasts />} />
      <Route path='/liked' element={<Liked />} />
    </Routes>
  );
}

export default App;
