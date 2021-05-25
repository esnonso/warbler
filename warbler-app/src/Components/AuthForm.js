import React, { Component } from 'react';

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
        const { email, password, profileImageUrl, username } = this.state
        const { heading, buttonText, signUp, errors, history, removeError} = this.props
        history.listen(()=> removeError())
        return(
          <div className="d-flex justify-content-center" >
              <div className='container-fluid'  >
                  <form onSubmit={this.handleSubmit} style={{width:"500px", margin:0, margin:"auto"}} >
                      <h2>{heading}</h2>
                     {errors.message && (
                      <div className=" alert alert-danger">{errors.message}</div>
                      ) }

                      <label htmlFor="email">Email</label>
                      <input className="form-control"
                        type="text"
                        id="email" 
                        name="email"
                        onChange={this.handleChange} 
                        value={email} />
                       
                      <label htmlFor="password">Password</label>
                      <input className="form-control"
                        type="password"
                        id="password" 
                        name="password"
                        onChange={this.handleChange} 
                       />
                       {signUp && (
                           <div>
                                <label htmlFor="username">username</label>
                                <input className="form-control"
                                type="text"
                                id="username" 
                                name="username"
                                onChange={this.handleChange} 
                                value={username} />

                                <label htmlFor="profileImageUrl">Image</label>
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
                  </form>
              </div>
          </div> 
        )
    }
}