import { useNavigate } from "react-router-dom";
import RegisterComponent from "../../components/products/RegisterComponent";


const RegisterPage = () => {

    const navigate = useNavigate();

    const moveList = () => {

        navigate("../list")

    }


    return ( 
        <div
        className="text-2xl">
            Product Register page
            <RegisterComponent moveList={moveList}></RegisterComponent>
        </div>
     );
}
 
export default RegisterPage;