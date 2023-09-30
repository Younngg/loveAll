import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
import Place from '../pages/Place';
import Home from '../pages/Home';
import PlaceWrite from '../pages/PlaceWrite';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/place' element={<Place />} />
        <Route path='/place/write' element={<PlaceWrite />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
