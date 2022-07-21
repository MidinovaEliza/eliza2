import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {BsCartPlusFill} from "react-icons/bs"
import {AiFillHeart} from "react-icons/ai"
import ProductCard from "../ProductCard";
import {initialState} from "../redux/reducer";

const filterProducts=(searchText,listOfSearch)=>{
    if(!searchText){
        return listOfSearch
    }
    return listOfSearch.filter(({title})=>initialState.products.title.toLowerCase().includes(searchText.toLowerCase()))
}
const Catalog = () => {
    const {products} = useSelector(s => s)
    console.log(products)




            return (
                <div className="container">
                    <h1 className="text-red-800 bg-white text-center text-2xl  my-5">Товары</h1>

                    <div className="row flex flex-row flex-wrap">

                        {
                          products.map(catalog => (
                                    <ProductCard catalog={catalog}/>
                                )
                            )
                        }

                    </div>
                </div>

        )

}
export default Catalog