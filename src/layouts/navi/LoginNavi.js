import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const LoginNavi = () => {

    const {email,nickname} = useSelector(state => state.login)

    console.log("LoginNavi..........", email)

    if(email !== '') {
        return (
            <div>
                <div>
                    {email} - {nickname}
                </div>
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