import { Link } from 'react-router-dom';
//import MessageList from '../Containers/MessageList';
import MessageTimeline from './Messagetimeline'

const Homepage = ({ currentUser}) => {
    if(!currentUser.isAuthenticated){
        return(
            <div className="home">
                <h1>Whats Happening</h1>
                <h4>New to Warbler?</h4>
                <Link to="/signup" className="btn btn-primary">Sign up here</Link>
        </div>
        )
    }
    return (
        <div><MessageTimeline profileImageUrl={currentUser.user.profileImageUrl} username={currentUser.user.username}/></div>
    )
}

export default Homepage;