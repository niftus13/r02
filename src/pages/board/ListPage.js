import { useSearchParams } from "react-router-dom";


const ListPage = () => {


    const [search, setSearch] = useSearchParams()

    console.log(search)

    const page = search.get("page") || 1
    const size = search.get("size") || 10
    const type = search.get("type")
    const keyword = search.get("keyword")

    const queryObj = {page, size, type, keyword}
    console.log(queryObj)

    

    return ( 
        <div>
            Board List Page
        </div>
     );
}
 
export default ListPage;