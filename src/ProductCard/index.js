import React from "react"
import {BsCartPlusFill} from "react-icons/bs";
import {AiFillHeart} from "react-icons/ai";
import {useDispatch, useSelector} from "react-redux";



import {
    ADD_TO_BASKET,
    ADD_TO_FAVORITE,
    BASKET_MINUS,
    DELETE_TO_BASKET,
    DELETE_TO_FAVORITE,

} from "../redux/actionTypes";
import AddToCart from "../Function/AddToCart";
import AddedToCard from "../Function/AddedToCard";
import AddToFavorite from "../Function/AddToFavorite";
const ProductCard=({catalog})=>{
    const dispatch=useDispatch()

    const {basket}=useSelector(s=>s)

    let isAdded=basket.find(el=>el.id===catalog.id)
    const addToBasket=(catalog)=>{
catalog.isBasket=true
        dispatch({type:ADD_TO_BASKET,payload:catalog})
    }
    const basketMinus=(catalog)=>{
        dispatch({type:BASKET_MINUS,payload:catalog})
    }
    const addToFavorite=(catalog)=>{
     catalog.isLiked=true

        dispatch({type:ADD_TO_FAVORITE,payload:catalog})
    }
    const deleteFromFav=(id)=>{
        dispatch({type:DELETE_TO_FAVORITE,payload:id})
    }

const deleteToBasket=(catalog)=>{
        dispatch({type:DELETE_TO_BASKET,payload:catalog})
}



    return(
        <div className="basis-1/4">
            <div
                className="max-w-sm mx-4 my-3  bg-gray-400 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg" src={catalog.image} alt=""/>
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-xl  tracking-tight text-gray-900 dark:text-white">{catalog.title}
                        </h5>
                        <p className="mb-3  tracking-tight text-gray-900 dark:text-white">price: {catalog.price}</p>
                        <div className="flex items-center">
                          <span>  {
                              isAdded ?<AddedToCard/> :<AddToCart catalog={catalog} addToBasket={addToBasket} basketMinus={basketMinus} deleteToBasket={deleteToBasket}/>
                          }</span>
                          <span><AddToFavorite addToFavorite={addToFavorite} deleteCard={deleteFromFav} catalog={catalog} /></span>


                        </div>
                    </a>
                </div>
            </div>

        </div>
    )
}
export default ProductCard