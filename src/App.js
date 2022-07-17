import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import { Header } from './components/Header';
import { InputForm } from './components/InputForm';
import { UpcomingMovies } from './pages/UpcomingMovies';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<InputForm />} />
        <Route path='/movies' element={<UpcomingMovies />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
