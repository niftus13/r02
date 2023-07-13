import { useParams } from "react-router-dom"
import useQueryObj from "../../hooks/useQueryObj"
import ReadComponent from "../../components/products/ReadComponent"


const ReadPage = () => {

    const {queryObj, setSearch, moveRead, moveList} = useQueryObj()
    const {pno} = useParams()

    console.log(pno)
    console.log(queryObj)


    return ( 
        <div>
            <ReadComponent pno={pno}></ReadComponent>
        </div>
     );
}
 
export default ReadPage;