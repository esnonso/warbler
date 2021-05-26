import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postNewMessage } from '../store/actions/messages';

class MessageForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message:""
        }
        
    }

    handleNewMessage =event => {
        event.preventDefault()
        this.props.postNewMessage(this.state.message);
        this.setState({message:""})
        this.props.history.push("/");
    }
    render(){
        return(
         <div className="container">
            <form onSubmit={this.handleNewMessage}>
                {this.props.errors.message && (
                    <div className="alert alert-danger">{this.props.errors}</div>
                )}
            <label className="label">
                <input style={{height: "100px"}}
                     type="text"
                    className="form-control"
                    value={this.state.message}
                    onChange={e => this.setState({ message: e.target.value })}
                 />
            </label>
            <p>
                <button className="btn btn-success" type="submit">Send my message</button>  
            </p>
            </form>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        errors: state.errors
    }
}

export default connect(mapStateToProps, { postNewMessage})(MessageForm)