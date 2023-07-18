import KakaoLoginComponent from "../../components/member/KakaoLoginComponent";
import LoginComponent from "../../components/member/LoginComponent";
import BasicLayout from "../../layouts/BasicLayout";



const LoginPage = () => {
    return ( 
        <BasicLayout>
            <div>Login Page</div>
            <div className=" text-center h-[80vh]">
                <LoginComponent></LoginComponent>
                <KakaoLoginComponent></KakaoLoginComponent>
            </div>
            
        </BasicLayout>
     );
}
 
export default LoginPage;