import { useEffect, useState } from "react";
import ReplyList from "./ReplyList";
import ReplyInput from "./ReplyInput";

const initState = {
    bno: 0,
    page: 1,
    last: false,
    refresh: false
}

const ReplyWrapper = ({bno}) => {

    const [data, setData] = useState(initState)

    useEffect(() => {

        data.bno = bno
        data.last = true
        data.page = 1
    
        setData({...data})

    }, [bno])

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

    return ( 
        <div>
            <ReplyInput bno={bno} refreshLast={refreshLast}></ReplyInput>
            <ReplyList {...data} movePage={movePage}></ReplyList>
        </div>
     );
}
 
export default ReplyWrapper;