import React from "react"
import {AiFillHeart} from "react-icons/ai";
const AddToFavorite=({addToFavorite,catalog,deleteCard})=>{

    return(

            <button

onClick={()=>catalog.isLiked ? deleteCard(catalog.id) :addToFavorite(catalog)}
                className="bg-gradient-to-r   hover:bg-gradient-to-br focus:ring-4 focus:outline-none  shadow-lg shadow-red-500/50 dark:shadow-lg  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                <AiFillHeart className={`${catalog.isLiked ? "text-red-600 text-xl":"text-xl text-white" } `}/>
            </button>

    )
}
export default AddToFavorite