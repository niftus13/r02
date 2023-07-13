import { useParams } from "react-router-dom";
import useQueryObj from "../../hooks/useQueryObj";
import ModifyComponent from "../../components/products/ModifyComponent";


const ModifyPage = () => {

    const {queryObj, setSearch, moveRead, moveList, moveModify} = useQueryObj()
    const {pno} = useParams()






    return ( 
        <div>
            <div>MODIFY PAGE  {pno}</div>
            <ModifyComponent 
            pno={pno} 
            moveList={moveList} 
            moveRead={moveRead}>
            </ModifyComponent>
        </div>
     );
}
 
export default ModifyPage;