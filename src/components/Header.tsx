import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='max-w-screen-lg flex justify-between items-center mx-auto py-5'>
      <Link to='/'>
        <h1 className='text-xl font-bold'>Love All</h1>
      </Link>
      <nav className='flex gap-4 text-sm'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/places'>Places</Link>
        <Link to='/contact'>Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
