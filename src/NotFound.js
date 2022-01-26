import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry...</h2>
            <p>That page dos not exist... (404 error)</p>
            <Link to="/">   Back to the homepage?</Link>
        </div>
     );
}
 
export default NotFound;