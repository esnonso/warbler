import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMessages, removeMessage } from '../store/actions/messages';
import MessageItem from '../Components/messageItem'

class MessageList extends Component {
    componentDidMount (){
       this.props.fetchMessages()
    }
      render(){
          const { messages, removeMessage, currentUser } = this.props
          let messageList = messages.map(m => (
              <MessageItem key={m._id} 
                username={m.user.username} 
                text={m.text} 
                date={m.createAt} 
                profileImgUrl={m.user.profileImgUrl}
                removeMessage={removeMessage.bind(this, m.user._id, m._id)}
                isCorrectUser={currentUser === m.user._id}
              />
          ))
         return (
             <div className="row col-sm-8">
                 <div className="offset-1 col-sm-10">
                     <ul className="list-group" id="messages">
                         {messageList}
                     </ul>
                 </div>
             </div>
         )
      }
  }


function mapStateToProps(state) {
    return {
        messages: state.messages,
        currentUser:state.currentUser.user.id
    }
}
export default connect(mapStateToProps, { fetchMessages, removeMessage })(MessageList)
