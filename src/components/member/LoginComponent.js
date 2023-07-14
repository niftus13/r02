import { useState } from "react";
import { useDispatch } from "react-redux";
import { requestLogin } from "../../reducers/loginSlice";


const initState = {
    email: 'karl08@gmail.com',
    pw: '1111'
}

const LoginComponent = () => {

    const [loginInfo, setLoginInfo] = useState({...initState})

    const dispatch = useDispatch()




    return ( 
        <div>
            <div>
                <label>email</label>
                <input type="text" name="email" value={loginInfo.email}
                onChange={() => {}}></input>
            </div>
            <div>
                <label>password</label>
                <input type="password" name="pw" value={loginInfo.pw}
                onChange={() => {}}></input>
            </div>
            <div>
                <button onClick={() => dispatch(requestLogin(loginInfo))}>LOGIN</button>
            </div>
        </div>


     );
}
 
export default LoginComponent;