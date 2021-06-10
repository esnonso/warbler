import React, { Component } from 'react';
import { Container, Form } from 'react-bootstrap';

export default class AuthForm extends Component {
    constructor(props){
        super(props)
        this.state= {
            email:"",
            username:"",
            password:"",
            profileImageUrl:""
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        const authType = this.props.signUp ? "signup": "signin"; //if this.props is signup then signup, otherwise sign in
        this.props.onAuth(authType, this.state)
        .then(()=> {
            this.props.history.push('/')
        })
        .catch((e) => {
            return 
        })
    }

    render(){
        const { email,  profileImageUrl, username } = this.state
        const { heading, buttonText, signUp, errors, history, removeError} = this.props
        history.listen(()=> removeError())
        return(
            <Container>
                  <Form onSubmit={this.handleSubmit} style={{width:"500px", margin:0, margin:"auto"}} >
                      <Form.Group>
                      <h2>{heading}</h2>
                     {errors.message && (
                      <div className=" alert alert-danger">{errors.message}</div>
                      ) }

                      <Form.Label >Email</Form.Label>
                      <input className="form-control"
                        type="email"
                        id="email" 
                        name="email"
                        onChange={this.handleChange} 
                        value={email} />
                       
                       <Form.Label >Password</Form.Label>
                      <input className="form-control"
                        type="password"
                        id="password" 
                        name="password"
                        onChange={this.handleChange} 
                       />
                       {signUp && (
                           <div>
                                <Form.Label >Username</Form.Label>
                                <input className="form-control"
                                type="text"
                                id="username" 
                                name="username"
                                onChange={this.handleChange} 
                                value={username} />

                                <Form.Label >Profile Image Url</Form.Label>
                                <input className="form-control"
                                type="text"
                                id="profileImageUrl" 
                                name="profileImageUrl"
                                value={profileImageUrl}
                                onChange={this.handleChange} 
                                 />
                           </div>
                       )}

                       <button type="submit" className="btn btn-primary btn-block btn-lg" style={{marginTop: "10px"}}>
                           {buttonText}
                       </button>
                    </Form.Group>
                  </Form>
          </Container>
        )
    }
}