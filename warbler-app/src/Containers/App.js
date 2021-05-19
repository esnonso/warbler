import { Provider } from "react-redux";
import { configureStore } from '../store'
import { BrowserRouter as Router} from 'react-router-dom';
import Navbar from './navbar'
import Main from './main'

function App() {
  const store = configureStore()
  return (
    <Provider store={store}>
        <Router>
          <div className="containers">
            <Navbar />
            <Main />
          </div> 
        </Router>
    </Provider>
  );
}



export default App;
