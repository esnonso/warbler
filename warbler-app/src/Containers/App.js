import { Provider } from "react-redux";
import { configureStore } from '../store'
import { BrowserRouter as Router} from 'react-router-dom';
import Navbar from './navbar'
import Main from './main'
import { setAuthorizationToken, setCurrentUser } from "../store/actions/auth";
import jwtDecode from 'jwt-decode'

function App() {
  const store = configureStore()
  if(localStorage.jwtToken){
    setAuthorizationToken(localStorage.jwtToken)
    //prevent someone from manually tampering with the key in local storage
    try{
      store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)))
    }catch(e){
      store.dispatch(setCurrentUser({}))
    }
  }
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
