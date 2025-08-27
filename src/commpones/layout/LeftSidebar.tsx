import { IoMdSearch } from "react-icons/io";




function LeftSidebar() {
    return (
        <div className="p-2 border-r-2 border-gray-300 w-[220px] h-full absolute  left-0 top-0">
            <div className="flex text-[15px] border-theme border-2 p-2 items-center rounded-md relative  dark:border-white">
                <IoMdSearch className="absolute left-[15px] top-1/2 -translate-1/2 w-[15px]  dark:text-white"  />
                <input className="focus:outline-0 pl-[20px]  dark:text-white" type="text" placeholder="Search Book..." />
            </div>
        </div>
         );
}

export default LeftSidebar;