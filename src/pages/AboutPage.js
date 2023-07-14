import CountButtons from "../components/counter/CountButtons";
import CountDisplay from "../components/counter/CountDisplay";
import BasicLayout from "../layouts/BasicLayout";




const AboutPage = () => {

    
    return ( 

        <BasicLayout>
            <h2>About Page</h2>

            <CountDisplay></CountDisplay>
            <CountButtons></CountButtons>
            <CountDisplay></CountDisplay>
            <CountDisplay></CountDisplay>
        </BasicLayout>

     );
}
 
export default AboutPage;