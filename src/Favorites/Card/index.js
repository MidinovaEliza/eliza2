import React from "react"

import {FaTimesCircle} from "react-icons/fa";
import {useDispatch, useSelector} from "react-redux";
import AddToCart from "../../Function/AddToCart";
import DeleteToFavorite from "../../Function/DeleteToFavorite";
import {DELETE_TO_FAVORITE} from "../../redux/actionTypes";
const Card=({catalog,addToBasket})=>{
    const dispatch=useDispatch()
    const {basket}=useSelector(s=>s)
    let isAdded=basket.find(el=>el.id===catalog.id)
    const deleteFromFav=(id)=>{
        dispatch({type:DELETE_TO_FAVORITE,payload:id})
    }
    return(
        <div className="basis-1/4">
            <div
                className="max-w-sm mx-4 my-3  bg-green-400 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg" src={catalog.image} alt=""/>
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-xl  tracking-tight text-gray-900 dark:text-white">{catalog.title}
                        </h5>
                        <p className="mb-3  tracking-tight text-gray-900 dark:text-white">price: {catalog.price}</p>
                        <div className="flex items-center">
                          <span>

                                  {/*// isAdded ?<AddedToCard/> :*/}
                                      <AddToCart catalog={catalog} addToBasket={addToBasket}/>

                          </span>
                            <span>

                                <DeleteToFavorite deleteCard={deleteFromFav} catalog={catalog}/>
                            </span>


                        </div>
                    </a>
                </div>
            </div>

        </div>
    )
}
export default Card