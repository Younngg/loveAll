import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
import Place from '../pages/Place';
import Home from '../pages/Home';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/place' element={<Place />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
