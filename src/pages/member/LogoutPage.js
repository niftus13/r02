import { getCookies, removeCookies } from "../../util/cookieUtil";



const LogoutPage = () => {

    const getCookies = getCookies()

    const logout = () => {
        removeCookies()
    }



    return ( 
        <div>
            LogoutPage
        </div>
     );
}
 
export default LogoutPage;