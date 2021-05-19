import { Link } from 'react-router-dom';

const Homepage = () => (
    <div className="home">
        <h1>Whats Happening</h1>
        <h4>New to Warbler?</h4>
        <Link to="/signup" className="btn btn-primary">Sign up here</Link>
    </div>
)

export default Homepage;