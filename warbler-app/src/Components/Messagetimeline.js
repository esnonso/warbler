import MessageList from '../Containers/MessageList'
import UserAside from './userAside'

const MessageTimeline = props => {
    return(
        <div className="row">
        <UserAside profileImageUrl={props.profileImageUrl} username={props.username} />
        <MessageList />
        </div>
    )
}

export default MessageTimeline;