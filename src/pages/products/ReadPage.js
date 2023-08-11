import { useParams } from "react-router-dom"
import useQueryObj from "../../hooks/useQueryObj"
import ReadComponent from "../../components/products/ReadComponent"
import useCustomLogin from "../../hooks/useCustomLogin"
import ReadReplyComponent from "../../components/products/ReadReplyComponent"
import ReplyWrapper from "../../components/reply/ReplyWrapper"
import ProductReplyWrapper from "../../components/ProductReply/ProductReplyWrapper"


const ReadPage = () => {

    const {queryObj, setSearch, moveRead, moveList, moveModify} = useQueryObj()
    const {pno} = useParams()

    useCustomLogin(() => {
        alert("로그인을 하세요")
    })

    console.log(pno)
    console.log(queryObj)


    return ( 
        <div>
            <ReadComponent 
            pno={pno} 
            moveModify={moveModify} 
            moveList={moveList}>
            </ReadComponent>

            <ReadReplyComponent
            pno={pno}
            moveList = {moveList}>
            </ReadReplyComponent>
            <ProductReplyWrapper pno={pno}></ProductReplyWrapper>
            <button className="m-2 p-2 border-2 bg-orange-300"
         onClick={e => moveList()}>List</button>

        </div>
     );
}
 
export default ReadPage;