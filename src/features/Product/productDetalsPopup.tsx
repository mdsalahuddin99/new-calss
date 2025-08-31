import { FaRegHeart } from "react-icons/fa";

function ProductDetailsPopup() {
  return (
    <div className=" w-full h-screen fixed top-0 left-0 z-10 bg-white/30  backdrop-blur-md flex  justify-center items-start">
      <div className="w-[800px] rounded-md bg-white mt-[60px]  flex border-2  border-theme ">
        <div className="w-[calc(100%-160px)] p-4 mr-5 ">
          <h3 className="text-2xl font-bold mb-[5px] text-theme">Prenlter Prestion Pssquik</h3>
          <span className="text-[15px] mb-4 block text-gray-600">Comedy/Drama</span>
          <p className="text-[15px] text-gray-600   ">
            When I Feel Alone is a deeply introspective story that explores
            themes of isolation, connection, and healing. Through the
            protagonist's journey, readers are reminded of the importance of
            reaching out and finding support in others.
          </p>
          <div className="flex mt-5 ">
            <button className="bg-theme cursor-pointer h-[35px] mr-4 w-[160px] rounded-sm text-sm">
              $140 | Add to cart
            </button>
            <button className="w-[35px] cursor-pointer h-[35px] border border-theme rounded-md flex justify-center items-center">
              <FaRegHeart className="dark:text-white" />
            </button>
            <button className="bg-theme cursor-pointer h-[35px] ml-4 w-[60px] rounded-sm text-sm">
              Close
            </button>
          </div>
        </div>
        <div className="w-[160px] ">
          <img className="w-full" src="/products/i-1.jpg" alt="" />
        </div>
      </div>
      
    </div>
  );
}

export default ProductDetailsPopup;
