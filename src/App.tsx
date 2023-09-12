import { RecoilRoot } from 'recoil';
import QueryContext from './context/QueryContext';
import Router from './routes/Router';
import RecoilContext from './context/RecoilContext';

function App() {
  return (
    <>
      <QueryContext>
        <RecoilContext>
          <Router />
        </RecoilContext>
      </QueryContext>
    </>
  );
}

export default App;
