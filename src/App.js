import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import { Header } from './components/Header';
import { InputForm } from './components/InputForm';
import { UpcomingMovies } from './pages/UpcomingMovies';
import { CurrentlyWatching } from './pages/CurrentlyWatching';
import { Completed } from './pages/Completed';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<InputForm />} />
        <Route path='/movies' element={<UpcomingMovies />} />
        <Route path='/in-process' element={<CurrentlyWatching />} />
        <Route path='/completed' element={<Completed />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
