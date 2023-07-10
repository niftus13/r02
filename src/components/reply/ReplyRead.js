import { useEffect, useState } from "react";
import { deleteReply, getReply } from "../../api/repliesAPI";


const initState = {
    rno:0,
    bno:0,
    replyText:'',
    replyFile:'',
    replyer:''
}

const ReplyRead = ({rno, cancelRead, refreshPage}) => {

    console.log("replyRead...." + rno)

    const [reply, setReply] = useState(initState)

    useEffect(() => {

        getReply(rno).then(data => {
            console.log(data)
            setReply(data)
        })
    }, [rno])

    const   handleClickDelete = () => {

        deleteReply(rno).then(data => {
            alert(`${data.result} 번 댓글이 삭제되었습니다`)
            refreshPage()
        })
    }

    return ( 
        <div className="m-8 bg-blue-200 border-2">
            <div>Reply Read {rno}</div>
            <div>
                <div>{rno}</div>
                <div>{reply.replyText}</div>
                <div>{reply.replyer}</div>

            </div>
            <div>
                <button>Modify</button>
                <button onClick={handleClickDelete}>Delete</button>
                <button onClick={cancelRead}>Cancel</button>
            </div>
        </div>
     );
}
 
export default ReplyRead;