import { useEffect, useState } from "react";
import {getRepliesOfBoard} from "../../api/repliesAPI"
import ListPageComponent from "../common/ListPageComponent";
import { getRepliesOfProduct } from "../../api/productRepliesAPI";

const initState = {
    dtoList:[],
    end:0,
    start:0,
    next: false,
    prev: false,
    pageNums:[],
    page:0,
    size:0,
    requestDTO:null
}

const ProductReplyList = ({pno, page, last, refresh, movePage, changeCurrent}) => {

    console.log("Reply list...pno" + pno)

    const [listData, setListData] = useState(initState)

    useEffect(() => {
        
        getRepliesOfProduct(pno,page,last).then(data => {
            console.log("Reply data.....")
            setListData(data)
        })

    

    }, [pno, page, last, refresh])

    return ( 
        <div>
            <div>
                ReplyList
            </div>
            <div>
                <ul>
                    {listData.dtoList.map(reply => <li 
                    key={reply.prno}
                    onClick={() => changeCurrent(reply.prno)}
                    >
                        {reply.prno} - {reply.replyText}
                    </li>)}
                </ul>
                <ListPageComponent {...listData} movePage={movePage}></ListPageComponent>
            </div>  
        </div>
     );
}
 
export default ProductReplyList;