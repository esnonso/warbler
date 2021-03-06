import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import DefaultProfileImg from '../images/default-profile-pic.png';
import { Button } from 'react-bootstrap'


 const MessageItem = ({date, profileImgUrl, text, username, removeMessage, isCorrectUser}) => (
    <div>
        <li className="list-group-item">
        <img src={profileImgUrl || DefaultProfileImg} alt={username} height="100" width={100} className="timeline-image" />
        <div className="message-area">
            <p>Created by:<Link to="#">@{username} &nbsp;</Link>
            <span className="text-muted">
               On: <Moment className="text-muted" format="DD MM YYYY">{date}</Moment>
            </span>
            </p>
            <p>{text}</p>
            {isCorrectUser && (<Button variant="danger" onClick={removeMessage} >Delete </Button>)}
            
        </div>
        </li>
    </div>
)

export default MessageItem;
