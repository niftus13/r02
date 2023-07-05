import { Link } from "react-router-dom";

const SampleNavi = () => {
    return ( 
        <div className="flex m-3 p-4 text-white font-extrabold">
            <div className="m-3 p-2 text-3xl border-2">
                <Link to={"/"}>Main</Link>
            </div>
            <div className="m-3 p-2 text-3xl border-2">
                <Link to={"/about"}>About</Link>
            </div>
            <div className="m-3 p-2 text-3xl border-2">
                <Link to={"/board/list"}>Board</Link>
            </div>
        </div>
     );
}
 
export default SampleNavi;