import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../store/actions/auth';
import { Navbar, Nav} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDove } from '@fortawesome/free-solid-svg-icons';

class NavbarComponent extends Component {
        logout = e => {
            e.preventDefault();
            this.props.logout()
        }
        navlink(){
            return 
        }
    render(){
        return(
            <Navbar variant="dark" expand="lg">
                <Navbar.Brand href="/"><h3><FontAwesomeIcon icon={faDove} size="2x"/>Warbler</h3></Navbar.Brand>
                {this.props.currentUser.isAuthenticated ? (
                    <Nav className="ms-auto">
                        <Nav.Link href={`/users/${this.props.currentUser.user.id}/messages/new`}><p>New Message</p></Nav.Link>
                        <Nav.Link onClick={this.logout}><p>Logout :{this.props.currentUser.user.username}</p></Nav.Link>
                    </Nav>
                ):
               <Nav className="ms-auto">
                   <Nav.Link href="/signup"><p>Signup</p></Nav.Link>
                   <Nav.Link href="/signin"><p>Signin</p></Nav.Link>
               </Nav>
                }
            </Navbar>
        )
    }
}

function mapStateToProps(state) {
    return{
        currentUser: state.currentUser
    }
}
export default connect(mapStateToProps, { logout })(NavbarComponent);