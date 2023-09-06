import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../pages';
import Header from '../components/Header';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
