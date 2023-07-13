import { useEffect, useRef, useState } from "react"
import { deleteProduct, getProduct } from "../../api/productAPI"


const initState = {
    pno:0,
    pname:'',
    pdesc:'',
    price:0,
    images:[]
}


const ModifyComponent = ({pno, moveList, moveRead}) => {

    const fileRef = useRef()
    const [product, setProduct] = useState(initState)

    useEffect(() => {
        
        getProduct(pno).then(data => {
            setProduct(data)
        })

    },[pno])

    const handleClickDelete = () => {

        deleteProduct(pno).then(data => {
            alert("상품이 삭제되었습니다")
            moveList()
        })
    }

    const handleChange = (e) => {
        product[e.target.name] = e.target.value
        setProduct({...product})
    }

    const handleClickModify = () => {

        const formData = new FormData()

        formData.append("pname", product.pname)
        formData.append("pdesc", product.pdesc)
        formData.append("price", product.price)

        if(product.images){
            for (let pi of product.images){
                formData.append("images",pi)
            }
        }
            
        const arr = fileRef.current.files

        for(let file of arr) {
            formData.append("files", file)
        }

    }



    return ( 
        <div>
            <div>ModifyComponent</div>
            <div>
            <div className="m-2 p-2 border-2">
                {product.pno}
            </div>
            <div className="m-2 p-2 border-2">
            <input 
                type="text" name="pname" value={product.pname} 
                onChange={handleChange}></input>
            </div>
            <div className="m-2 p-2 border-2">
            <input 
                type="text" name="pdesc" value={product.pdesc} 
                onChange={handleChange}></input>
            </div>
            <div className="m-2 p-2 border-2">
            <input 
                type="number" name="price" value={product.price} 
                onChange={handleChange}></input>
            </div>
            <div>
                <input type="file" name="images" ref={fileRef} ></input>
            </div>

            <div className="m-2 p-2 border-2">
                <ul className="m-2 p-2 list-none flex">
                    {product.images.map((fname,idx) => 
                    <li key={idx}
                    className="m-2">
                        <img src={`http://localhost/s_${fname}`}></img>
                    </li>
                    )}
                </ul>
            </div>
            </div>
            <div>
            <button
                className="bg-yellow-400 border-2 m-2 p-2 text-white font-bold"
                onClick={moveList}>
                Modify
            </button>
            <button
                className="bg-blue-300 border-2 m-2 p-2 text-white font-bold"
                onClick={moveList}>
                List
            </button>
            <button
                className="bg-red-300 border-2 m-2 p-2 text-white font-bold"
                onClick={handleClickDelete}>
                DELETE
            </button>
            </div>
        </div>
     );
}
 
export default ModifyComponent;