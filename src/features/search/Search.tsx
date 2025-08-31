
/* eslint-disable @typescript-eslint/no-explicit-any */
import { IoIosSearch } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";


const SearchItems = () =>{
    return(
        <div className="flex mx-[30px] bg-theme p-2 rounded-[5px] mb-3">
                        <div className="w-[50px]">
                        <img className="w-[50px]" src="/products/i-1.jpg" alt="" />
                    </div>
                    <div className="ml-[20px]">
                        <h4 className="text-[14px]">Lorem ipsum book name here</h4>
                        <span className="block text-[10px]">Lorem ipsum book name here</span>
                        <strong> BDT: 200 TK</strong>
                    </div>
                    </div>
    )
}


function Search ({ isSearch }: { isSearch: any }){
    return ( 
             <div className=" w-full h-screen fixed top-0 left-0 z-10 bg-white/30  backdrop-blur-md flex  justify-center items-start">
            <div className="w-[620px] py-5 rounded-md bg-white mt-[60px] " >
                <div className="relative px-5 border-b border-gray-300 ">
                  <IoIosSearch  className="absolute top-1.5" />
                  <input className="w-full pl-10 block focus:outline-0  " type="text"  />
                  <AiOutlineClose onClick={() => isSearch()}  className="absolute -top-2 right-4 text-lg cursor-pointer" />
                </div>
                <div className="text-center h-[120px] flex justify-center items-center">
                    <p >no data found</p>
                </div>
                <div className="overflow-y-scroll h-[240px] ">
                 <SearchItems/>   
                 <SearchItems/>   
                 <SearchItems/>   
                 <SearchItems/>   
                 <SearchItems/>   
                 <SearchItems/>   
                </div>
            </div>
            
        </div>
     );
}

export default Search