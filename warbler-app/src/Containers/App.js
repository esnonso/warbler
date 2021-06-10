import { Provider } from "react-redux";
import { configureStore } from '../store';
import { BrowserRouter as Router} from 'react-router-dom';
import NavbarComponent from './navbar';
import Main from './main';
import { setAuthorizationToken, setCurrentUser } from "../store/actions/auth";
import jwtDecode from 'jwt-decode';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Components/footer'

function App() {
  const store = configureStore()
  if(localStorage.jwtToken){
    setAuthorizationToken(localStorage.jwtToken)
    //prevent someone from manually tampering with the key in local storage
    try{
      store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
    }catch(e){
      store.dispatch(setCurrentUser({}));
    }
  }
  return (
    <Provider store={store}>
        <Router>
          <div className="containers">
            <NavbarComponent />
            <Main />
            <Footer />
          </div> 
        </Router>
    </Provider>
  );
}



export default App;
