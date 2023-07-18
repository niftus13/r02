import { Link } from "react-router-dom";

const REST_KEY = '06ab36e821e09a01f94844a4fd9d3663'
const REDIRECT_URL ='http://localhost:3000/member/kakao'

const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_KEY}&redirect_uri=${REDIRECT_URL}&response_type=code`



const KakaoLoginComponent = () => {


    return ( 
        <div className="text-3xl text-white">
            <Link to={kakaoURL}>KAKAO LOGIN</Link>
        </div>
     );
}
 
export default KakaoLoginComponent;