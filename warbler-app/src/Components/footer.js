import React,{ Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDove} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faGithub,  faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

class Footer extends Component {
    render(){
        return(
            <Container fluid className="footer">
                <Container className="footer-line"><h1 style={{fontSize:"50px"}} className="text-info">WARBLER</h1></Container>
                <Row>
                    <Col xs={12} lg={4}>
                        <h1><FontAwesomeIcon icon={faDove} size="2x"/></h1>
                        <h3>Keep Talking Jare!</h3>
                        <p>
                        <FontAwesomeIcon icon={faFacebook} size="3x"/>
                        <FontAwesomeIcon icon={faInstagram} size="3x"/>
                        <FontAwesomeIcon icon={faGithub} size="3x"/>
                        <FontAwesomeIcon icon={faLinkedinIn} size="3x"/>
                        </p>
                    </Col>
                    <Col>
                    <h1>Quick Links</h1>
                    <Button href="/signin" variant="outline-info" size="lg" block>Log In</Button>
                    <Button href="/signup" variant="outline-info" size="lg" block>Signup</Button>
                    </Col>
                    <Col>
                        <h1>Stay up to date</h1>
                        <input type="email" placeholder="enter your email here" className="form-control-md"></input>
                    </Col>
                </Row>
                <hr />
                <p>&copy;2021 Warbler Incoporations</p>
            </Container>
        )
    }
}

export default Footer;