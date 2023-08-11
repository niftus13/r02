import axios from "axios"


export const getRepliesOfProduct = async (pno, page = 1, last = false) => {

    const res = await axios.get(`http://localhost:8080/api/productreplies/${pno}/list?page=${page}&last=${last}`)

    return res.data
}