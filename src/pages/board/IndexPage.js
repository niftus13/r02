import { Outlet } from "react-router-dom";
import BasicLayout from "../../layouts/BasicLayout";

const IndexPage = () => {
    return ( 

            <BasicLayout>
                <div className="m-4 p-4 bg-green-400 text-2xl flex">
                    <div className="underline font-extrabold m-2 p-2">List</div>
                    <div className="underline font-extrabold m-2 p-2">Regist</div>
                </div>
                <div className="h-[50vh] w-full border-2 bg-white">
                    <Outlet></Outlet>
                </div>
            </BasicLayout> 

     );
}
 
export default IndexPage;