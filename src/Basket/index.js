import React from "react";
import {useDispatch, useSelector} from "react-redux";
import catalog from "../Catalog";

import TableRow from "./TableRow";
import {DELETE_TO_FAVORITE} from "../redux/actionTypes";
import DeleteToBasket from "../Function/DeleteToBasket";
import AddToOrder from "../Function/AddToOrder";
const Basket=()=>{
    const {basket}=useSelector(s=>s)
  const totalSum=basket.reduce((acc,el)=>{
        return acc+(el.price*el.quantity)
    },0)


    return(
        <div className="container">
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg mt-7">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-8">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-600 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="py-3 px-6">
                            Product name
                        </th>
                        <th scope="col" className="py-3 px-6">
                            product image
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Price
                        </th>

                        <th scope="col" className="py-3 px-6">
                            Quantity
                        </th>
                        <td className="py-4 px-6 text-right">

                        </td>

                    </tr>

                    </thead>

                    {
                        basket.map(el=><TableRow key={el.id} catalog={el} />)
                    }
                    <tr>
                        <th scope="col" className="  px-6 text-black bg-white">
                            общая сумма
                        </th>
                        <th className="py-3 px-6 bg-white text-black ">
                            {totalSum}
                        </th>

                        <td className="py-4 px-6 text-right bg-white">
<AddToOrder totalSum={totalSum}/>

                    </td>
                        <th className="py-3 px-6 bg-white text-black ">

                        </th>

                        <th className="py-3 px-6 bg-white text-black ">

                        </th>



                    </tr>


                </table>
            </div>
        </div>
    )
}
export default Basket