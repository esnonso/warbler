import { LOAD_MESSAGES, REMOVE_MESSAGES} from '../actionTypes';
import { addError } from './error';
import { apiCall } from '../../services/api';

const loadMessages = messages => ({
    type:LOAD_MESSAGES,
    messages
})

export const fetchMessages =  ()=> {
    //debugger
    return dispatch => {
        return apiCall("get", 'http://localhost:3001/api/messages')
        .then(res =>  dispatch(loadMessages(res)))
        .catch(err => addError(err.message))
    }
}

export const postNewMessage = text => (dispatch, getState) => {
    let { currentUser } = getState();
    const id = currentUser.user.id;
    return apiCall('post', `http://localhost:3001/api/users/${id}/message`, { text })
    .then(res => {})
    .catch(err => dispatch(addError(err.message)))
}
