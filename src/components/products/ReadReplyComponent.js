import { useEffect, useState } from "react";
import { getRepliesOfProduct } from "../../api/productRepliesAPI";

const initState = {
    dtoList: [],
    end: 0,
    start: 0,
    next: false,
    prev: false,
    pageNums: [],
    page: 0,
    size: 0,
    requestDTO: null

}




const ReadReplyComponent = ({pno}) => {

    
    const [reply , setReply]  = useState(initState)


    useEffect(() => {
        getRepliesOfProduct(pno).then(data =>{
            setReply(data)
            console.log(data)
        }).catch(e => {
            console.log(e)
        })

    },[pno])



    return ( 
        <div className="m-2 p-2 border-2">
            <div>
                <ul>
                    {reply.dtoList.map(
                        dto =>
                        <li
                        className="m-1 p-2 border-2"
                        key={dto.prno}>
                            {dto.prno}, {dto.nickname}, {dto.replyText}, {dto.grade}
                        </li>
                    )}
                </ul>
            </div>
            <div>
                
            </div>
        </div>
     );
}
 
export default ReadReplyComponent;