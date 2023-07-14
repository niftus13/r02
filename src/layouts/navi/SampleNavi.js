import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SampleNavi = () => {

    const todoArr = useSelector(state => state.todo)


    return ( 
        <div className="flex m-3 p-4 mx-auto text-white  bg-slate-800">
            <div className="flex ml-10 font-Archivo">
                <div className="m-3 p-2 text-3xl border-b-2">
                    <Link to={"/"}>Main</Link>
                    <span className="bg-red-600">{todoArr.length}</span>
                </div>
                <div className="m-3 p-2 text-3xl border-b-2">
                    <Link to={"/about"}>About</Link>
                </div>
                <div className="m-3 p-2 text-3xl border-b-2">
                    <Link to={"/products/list"}>Products</Link>
                </div>
                <div className="m-3 p-2 text-3xl border-b-2">
                    <Link to={"/board/list"}>Board</Link>
                </div>
            </div>
        </div>
     );
}
 
export default SampleNavi;