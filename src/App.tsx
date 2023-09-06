import QueryContext from './context/QueryContext';
import Router from './routes/Router';

function App() {
  return (
    <>
      <QueryContext>
        <Router />
      </QueryContext>
    </>
  );
}

export default App;
