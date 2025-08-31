import CartItem from "./CartItems";
import { RiDeleteBack2Line } from "react-icons/ri";

export function CartPopup() {
  return (
    <div className=" w-full h-screen fixed top-0 left-0 z-10 bg-white/30  backdrop-blur-md flex  justify-center items-start ">
     
      <div className="w-[800px] rounded-md bg-white mt-[60px]   border-2  border-theme absolute ">
        <RiDeleteBack2Line  className="absolute top-4 right-4 " />
        <h1 className="text-3xl py-3 font-bold text-center">Your Carts</h1>
        


        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className="overflow-y-scroll h-[220px]">
        

<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3 text-[15px]">
                    Product name
                </th>
                <th scope="col" className="px-6 py-3 text-[15px]">
                    Color
                </th>
                <th scope="col" className="px-6 py-3 text-[15px]">
                    Category
                </th>
                <th scope="col" className="px-6 py-3 text-[15px]">
                    Price
                </th>
                <th scope="col" className="px-6 py-3 text-[15px]">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </tbody>
    </table>
</div>

           </div>
          <div className="p-3 border-t border-gray flex justify-between">
            <strong>Total</strong>
            <button className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Checkout</button>
          </div>
        
        </div>
      </div>
    </div>
  );
}
