import SampleNavi from "./navi/SampleNavi";

const BasicLayout = ({children}) => {
    return ( 
        <div className="container mx-auto min-w-[1280px] bg-blue-600">
            <div>
                <SampleNavi></SampleNavi>
            </div>
            <div>
                {children}
            </div>

        </div>
     );
}
 
export default BasicLayout;