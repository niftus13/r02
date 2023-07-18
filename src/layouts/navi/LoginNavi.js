import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import CartNavi from "./CartNavi";
import { logout } from "../../reducers/loginSlice";


const LoginNavi = () => {

    const {email,nickname} = useSelector(state => state.login)
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const handleLogout = () => {

        dispatch(logout())
        navigate()
    }

    console.log("LoginNavi..........", email)

    if(email !== '') {
        return (
            <div>
                <div>
                    {email} - {nickname}
                </div>
                <div>
                    <button 
                    onClick={handleLogout}
                    className="border-2">logout</button>
                </div>
                <CartNavi></CartNavi>
            </div>

        )
    }


    return ( 
        <div>
            <div>
                <Link to="/member/login">LOGIN</Link>
            </div>

        </div>
     );
}
 
export default LoginNavi;