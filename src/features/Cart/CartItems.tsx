import { MdDeleteForever } from "react-icons/md";

function CartItem() {
    return ( 
                 <tr>
                <th scope="row" className="px-6 py-4 font-sm text-gray-900 whitespace-nowrap dark:text-white">
                    Apple Watch 5
                </th>
                <td className="px-6 py-4 text-[15px]">
                    Red
                </td>
                <td className="px-6 py-4 text-[15px]">
                    Wearables
                </td>
                <td className="px-6 py-4 text-[15px]">
                    $999
                </td>
                <td className="px-6 py-4 text-[30px] ">
                    <MdDeleteForever className="  text-red-600" />

                </td>
            </tr>
     );
}

export default CartItem;