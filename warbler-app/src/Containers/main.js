import { Switch , Route, withRouter, Redirect} from 'react-router-dom';
import { connect } from 'react-redux'
import Homepage from "../Components/homepage";
import AuthForm from '../Components/AuthForm'
import { authUser } from '../store/actions/auth'
import { removeError } from '../store/actions/error';
import withAuth from '../hocs/withAuth'
import MessageForm from '../Containers/messageForm'


const Main = props => {
    const { authUser, errors, currentUser} = props;
    return(
        <Switch>
        <Route exact path ="/" render = {props => <Homepage currentUser={currentUser} {...props}/>} />
        <Route exact path ="/signin" render= {props => {
            return(
                <AuthForm onAuth={authUser}
                        errors={errors}
                        buttonText="Log In"
                        removeError={removeError}
                        heading="Welcome back" {...props}/>
            )
        }}/>
        <Route exact path ="/signup" render= {props => {
            return(
                <AuthForm onAuth={authUser}
                    errors={errors}
                    signUp buttonText="sign Up"
                    removeError={removeError}
                    heading="Join Warbler Today" {...props}/>
            )
        }}/>

        <Route path="/users/:id/messages/new" component={withAuth(MessageForm)} />
    </Switch>
    ) 
}

function mapStateToProps(state){
    return{
        currentUser: state.currentUser,
        errors:state.errors
    }
}

export default withRouter(connect(mapStateToProps, { authUser, removeError } )(Main))