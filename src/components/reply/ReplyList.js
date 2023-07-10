import { useEffect, useState } from "react";
import {getRepliesOfBoard} from "../../api/repliesAPI"
import ListPageComponent from "../../common/ListPageComponent";

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

const ReplyList = ({bno, page, last, movePage}) => {

    console.log("Reply list...bno" + bno)

    const [listData, setListData] = useState(initState)

    useEffect(() => {

        

        getRepliesOfBoard(bno, page, last).then(data => {
            console.log("Reply list......" + data)
            setListData(data)
        })
    }, [bno, page, last])

    return ( 
        <div>
            <div>
                ReplyList
            </div>
            <div>
                <ul>
                    {listData.dtoList.map(reply => <li key={reply.rno}>{reply.rno} - {reply.replyText}</li>)}
                </ul>
                <ListPageComponent {...listData} movePage={movePage}></ListPageComponent>
            </div>  
        </div>
     );
}
 
export default ReplyList;