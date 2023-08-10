import ListComponent from "../../components/products/ListComponent";
import ListSearchComponent from "../../components/products/ListSearchComponent";
import useQueryObj from "../../hooks/useQueryObj";
import { createSearchParams } from "react-router-dom"

const ListPage = () => {

    const {queryObj, setSearch, moveRead, moveList} = useQueryObj()

    const movePage = (num) => {
        console.log("num===" , num)
        queryObj.page = num
        setSearch({...queryObj})
    }

    const moveSearch = (type, keyword) => {
        queryObj.page = 1
        queryObj.type = type
        queryObj.keyword = keyword
        setSearch({...queryObj})
    }



    return ( 
        <div className="text-3xl bg-slate-800">
            Products_ListPage
            <ListSearchComponent
            queryObj={queryObj}
            moveSearch = {moveSearch}>
            </ListSearchComponent>
            
            <ListComponent 
            queryObj={queryObj} 
            movePage={movePage} 
            moveRead={moveRead}>
            </ListComponent>
            
        </div>
     );
}
 
export default ListPage;