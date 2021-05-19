import { Switch , Route, withRouter, Redirect} from 'react-router-dom';
import { connect } from 'react-redux'
import Homepage from "../Components/homepage";
import AuthForm from '../Components/AuthForm'
import { authUser } from '../store/actions/auth'


const Main = props => {
    const { authUser} = props;
    return(
        <Switch>
        <Route exact path ="/" render = {props => <Homepage {...props}/>} />
        <Route exact path ="/signin" render= {props => {
            return(
                <AuthForm onAuth={authUser} buttonText="Log In" heading="Welcome back" {...props}/>
            )
        }}/>
        <Route exact path ="/signup" render= {props => {
            return(
                <AuthForm onAuth={authUser} signUp buttonText="sign Up" heading="Join Warbler Today" {...props}/>
            )
        }}/>
    </Switch>
    ) 
}

function mapStateToProps(state){
    return{
        currentUser: state.currentUser
    }
}

export default withRouter(connect(mapStateToProps, { authUser })(Main))