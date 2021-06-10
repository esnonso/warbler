import { Link } from 'react-router-dom';
//import MessageList from '../Containers/MessageList';
import MessageTimeline from './Messagetimeline';
import { Container } from 'react-bootstrap';

const Homepage = ({ currentUser}) => {
    if(!currentUser.isAuthenticated){
        return(
            <Container fluid className="home">
                <h1>Whats Happening</h1>
                <h4>New to Warbler?</h4>
                <Link to="/signup" className="btn btn-primary">Sign up here</Link>
            </Container>
        )
    }
    return (
        <div><MessageTimeline profileImageUrl={currentUser.user.profileImageUrl} username={currentUser.user.username}/></div>
    )
}

export default Homepage;