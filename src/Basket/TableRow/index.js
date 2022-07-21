import React from "react"
import {useDispatch} from "react-redux";
import {ADD_TO_BASKET, BASKET_MINUS, DELETE_TO_BASKET, DELETE_TO_FAVORITE} from "../../redux/actionTypes";
import DeleteToBasket from "../../Function/DeleteToBasket";
const TableRow=({catalog,deleteCard})=>{
    const dispatch=useDispatch()
    const addToBasket=(catalog)=>{
        dispatch({type:ADD_TO_BASKET,payload:catalog})
    }
    const basketMinus=(catalog)=>{
        dispatch({type:BASKET_MINUS,payload:catalog})
    }
    const deleteToBasket=(catalog)=>{
        dispatch({type:DELETE_TO_BASKET,payload:catalog})
    }


    return(
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {catalog.title}
            </th>
            <td className="py-4 px-6">
                <img src={ catalog.image} alt="" width="50px"/>
            </td>
            <td className="py-4 px-6">
                {catalog.price*catalog.quantity}
            </td>
            <td className="py-4 px-6">
                <span onClick={()=>addToBasket(catalog)} className="mx-2 font-bold text-xl">+</span>
                {catalog.quantity}
                <span onClick={()=>basketMinus(catalog)} className="mx-2 font-bold text-xl">-</span>
            </td>
            <td className="py-4 px-6 text-right">
               <DeleteToBasket catalog={catalog} deleteToBasket={deleteToBasket}/>
            </td>

        </tr>
    )
}
export default TableRow