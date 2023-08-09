import { useEffect, useState } from "react";
import { getProduct } from "../../api/productAPI";
import { useDispatch, useSelector } from "react-redux";
import { addCartThunk } from "../../reducers/cartSlice";


const initState = {
    pno:0,
    pname:'',
    pdesc:'',
    price:0,
    brand:'',
    event:'',
    images:[]
}



const ReadComponent = ({pno, moveModify, moveList}) => {

    const {email} = useSelector(state => state.login)

    const [product, setProduct] = useState(initState)

    const dispatch = useDispatch()

    useEffect(() => {
        
        getProduct(pno).then(data => {
            setProduct(data)
        }).catch(e => {
            console.log(e)
            moveList()
        })

    },[pno])


    return ( 
        <div>
            <div className="m-2 p-2 text-white">
                <div className="m-2 p-2 border-2">
                {product.pname}
                </div>
                <div className="m-2 p-2 border-2">
                    {product.price}
                </div>
                <div className="m-2 p-2 border-2">
                    <ul>
                        {/* {product.images.map((fname,idx) => 
                        <li key={idx}>
                            <img src={`http://localhost/${fname}`}></img>
                        </li>
                        )} */}
                        <img src={`http://localhost/${product.brand}/${product.images}`}></img>
                    </ul>
                </div>
                <div>
                    <button
                    className="bg-blue-300 border-2 m-2 p-2 text-white font-bold"
                    onClick={()=> moveModify(product.pno)}>
                        Modify
                    </button>
                    <button
                    className="bg-blue-300 border-2 m-2 p-2 text-white font-bold"
                    onClick={moveList}>
                        List
                    </button>
                    <button
                    className="bg-blue-300 border-2 m-2 p-2 text-white font-bold"
                    onClick = {() => {
                        dispatch(addCartThunk({email,pno}))
                    }}>
                        addCart
                    </button>
                </div>
            </div>
        </div>
     );
}
 
export default ReadComponent;