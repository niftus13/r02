import { useEffect, useState } from "react";
import ReplyList from "./ProductReplyList";
import ReplyInput from "./ProductReplyInput";
import ReplyRead from "./ProductReplyRead";

const initState = {
    pno: 0,
    page: 1,
    last: false,
    refresh: false,
    current:0
}

const ProductReplyWrapper = ({pno}) => {

    const [data, setData] = useState(initState)

    useEffect(() => {

        data.pno = pno
        data.last = true
        data.page = 1
    
        setData({...data})

    }, [pno])

    const changeCurrent = (prno) => {

        data.current = prno
        setData({...data})
    }

    const movePage = (num) => {

        console.log("num...." + num)

        data.page = num
        data.last = false
        data.refresh = !data.refresh

        setData({...data})
    }

    const refreshLast = () => {
        data.last = true
        data.refresh = !data.refresh
        setData({...data})
    }

    const cancelRead = () => {
        
        data.current = 0
        setData({...data})
    }

    const refreshPage = (hide) => {
        data.refresh = !data.refresh

        if(hide) {
            data.current = 0
        }
        
        setData({...data})
    }

    return ( 
        <div>
            <ReplyInput pno={pno} refreshLast={refreshLast}></ReplyInput>
            <ReplyList {...data} movePage={movePage} changeCurrent={changeCurrent}></ReplyList>
            {data.current != 0 ? <ReplyRead prno={data.current} cancelRead={cancelRead} refreshPage={refreshPage}></ReplyRead>:<></>}
        </div>
     );
}
 
export default ProductReplyWrapper;