import { useEffect, useState } from "react";




const ListSearchComponent = ({queryObj,moveSearch}) => {

    const [searchObj, setSearchObj] = useState({type : '', keyword : ''})

    useEffect(() => {
        searchObj.type = queryObj.type || ''
        searchObj.keyword = queryObj.keyword || ''

        setSearchObj({...searchObj})
    },[queryObj])


    return ( 
        <div>
             <div className="m-4 p-4 flex bg-blue-300 border-2">
                    <select className="border-1 m-2 p-2"
                        value={searchObj.type}
                        onChange={e => {
                            searchObj.type = e.target.value
                            setSearchObj({ ...searchObj })
                        }}>
                        <option value={''}>----</option>
                        <option value={'t'}>제목</option>
                        <option value={'b'}>브랜드</option>
                        {/* <option value={'h'}>해시태그</option> */}
                        <option value={'tb'}>제목브랜드</option>
                        {/* <option value={'tbh'}>제목브랜드해시태그</option> */}
                    </select>

                    <input type="text"
                        className="border-1 m-2 p-2"
                        value={searchObj.keyword}
                        onChange={e => {
                            searchObj.keyword = e.target.value
                            setSearchObj({ ...searchObj })
                        }}></input>

                    <button className="p-2 m-2 border-2"
                        onClick={e => {
                            moveSearch(searchObj.type, searchObj.keyword)
                        }}>SEARCH</button>
                </div>
        </div>
     );
}
 
export default ListSearchComponent;