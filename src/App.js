import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Header } from './components/Header';
import { InputForm } from './components/InputForm';
import { UpcomingMovies } from './pages/UpcomingMovies';
import { CurrentlyWatching } from './pages/CurrentlyWatching';
import { Completed } from './pages/Completed';
import { Footer } from './components/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<InputForm />} />
        <Route path='/movies' element={<UpcomingMovies />} />
        <Route path='/active' element={<CurrentlyWatching />} />
        <Route path='/completed' element={<Completed />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
