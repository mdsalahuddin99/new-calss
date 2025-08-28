import { IoMdSearch } from "react-icons/io";
import { AiOutlineFire } from "react-icons/ai";
import React from "react";
import { FiFolderPlus } from "react-icons/fi";
import { GrAnnounce } from "react-icons/gr";
import { FaRegHeart } from "react-icons/fa";



interface ListItemProps {
    title: string;
    icon: React.ReactNode;
}

const ListItem: React.FC<ListItemProps> = ({ title, icon }) => {
    return (
        <li className="mb-2">
            <button className="px-3 mb-2 py-1.5 border border-gray-200 flex items-center w-full rounded-md cursor-pointer hover:bg-theme hover:text-white">
                {icon}
                <span className="ml-3 dark:text-white">{title}</span>
            </button>
        </li>
    )
}


function LeftSidebar() {
    return (
        <div className="p-2 border-r-2 border-gray-300 w-[220px] h-full absolute  left-0 top-0">
            <div className="flex text-[15px] border-theme border-2 p-2 items-center rounded-md relative  dark:border-white mb-2 ">
                <IoMdSearch className="absolute left-[15px] top-1/2 -translate-1/2 w-[15px]  dark:text-white"  />
                <input className="focus:outline-0 pl-[20px]  dark:text-white" type="text" placeholder="Search Book..." />
            </div>
            <div>
                <ul>
                   <ListItem  title="Trending" icon={<AiOutlineFire className="dark:text-white" />} />
                   <ListItem  title="New Releases" icon={<FiFolderPlus className="dark:text-white"  />} />
                   <ListItem  title="Coming Soon" icon={<GrAnnounce className="dark:text-white"  />} />
                   <ListItem  title="Favorites" icon={<FaRegHeart className="dark:text-white"  />} />


                </ul>
            </div>
        </div>
         );
}

export default LeftSidebar;