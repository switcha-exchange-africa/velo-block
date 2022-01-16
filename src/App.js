import './styles/App.css';
import { useDispatch } from 'react-redux';
import { getConversionRequest } from './redux/requests/actions';
import Dashboard from './components/Dashboard';
import 'react-loading-skeleton/dist/skeleton.css';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
    <div className="App">
        <Dashboard/>
    </div>
  );
}

export default App;
