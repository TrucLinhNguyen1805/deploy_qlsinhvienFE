import { useDispatch, useSelector } from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import { logout } from "../redux/accountAction";
function HeaderComponent(){
    const account = useSelector(state => state.user.account);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogout=()=>{
        dispatch(logout());
        navigate('/student');
    }
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Hi Linh!</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active" to="/student">List</Link>
                    </li>
                    <li className="nav-item">
                    {!account&&<Link className="nav-link active" to="/login">Login</Link>}
                    </li>
                    <li className="nav-item">
                    {account&& <button onClick={handleLogout}>Logout</button>}
                    </li>
                    <li>
                        {account&&account.username}
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    );
}
export default HeaderComponent;