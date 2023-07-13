import { createSearchParams } from "react-router-dom";
import { getList } from "../../api/productAPI";
import { useEffect, useState } from "react";
import ListPageComponent from "../common/ListPageComponent";


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

const ListComponent = ({queryObj, movePage, moveRead}) => {

    const [listData, setListData] = useState(initState)

    useEffect(() => {

        getList(queryObj).then(data => {
            console.log(data)
            setListData(data)
        })

    },[queryObj])
    // use*** = 컴포넌트 안에서만. 아닐경우는 함수로 사용가능
    // console.log(createSearchParams(queryObj).toString())


    return ( 
        <div>
            <div>
                <div>ListComponent</div>
                
            </div>
            <div>
                <ul className="flex flex-wrap container justify-center font-Archivo">
                    {listData.dtoList.map(
                        dto => 
                        <li 
                        className="w-2/5 h-[350px] m-2 p-2 rounded-md  shadow-md bg-orange-300"
                        key={dto.pno}
                        onClick={() => moveRead(dto.pno)}
                        >
                            <div className="">
                                <div className="text-white">
                                    {dto.pno}
                                </div>
                                <div className="flex justify-center items-center">
                                    <img src={`http://localhost/s_${dto.fname}`} alt="ddd"></img>
                                </div>
                                <div className="justify-center text-center">{dto.pname} - {dto.price}</div> 
                                <div>
                                    리뷰 : {dto.reviewCnt} - {dto.reviewAvg}
                                </div>
                            </div>
                             </li>)}
                </ul>
            </div>

            <ListPageComponent movePage={movePage} {...listData}></ListPageComponent>

        </div>
     );
}
 
export default ListComponent;