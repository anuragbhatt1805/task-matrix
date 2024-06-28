/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  IoMdPersonAdd,
  IoMdPeople,
  IoMdCheckmark,
  IoMdCheckmarkCircle,
} from "react-icons/io";
import { CgProfile } from "react-icons/cg";

const Sidebar = ({ isSubMenuOpen, setIsSubMenuOpen }) => {
  const [activeMenu, setActiveMenu] = useState("");

  const handleClick = (menu) => {
    const newActiveMenu = activeMenu === menu ? "" : menu;
    setActiveMenu(newActiveMenu);
    setIsSubMenuOpen(newActiveMenu !== "");
  };

  return (
    <div className="bg-gray-800 text-white left-0 fixed w-16 h-screen flex flex-col gap-4 py-4">
      <nav className="w-full flex px-auto justify-center">
        <ul>
          <li>
            <button
              onClick={() => handleClick("profile")}
              className={`flex items-center w-full py-2 px-2 relative ${
                activeMenu === "profile" ? "bg-gray-700" : ""
              }`}
            >
              <CgProfile className="text-4xl" />
              {activeMenu === "profile" && (
                <div className="absolute left-0 top-0 h-full w-1 bg-white"></div>
              )}
            </button>
            {activeMenu === "profile" && (
              <div className="absolute top-0 w-64 h-screen bg-slate-700 ml-12">
                <ul className="pl-6">
                  <li>
                    <Link to="/add-profile" className="block py-2">
                      Add Profile
                    </Link>
                  </li>
                  <li>
                    <Link to="/manage-profile" className="block py-2">
                      Manage Profile
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li>
            <button
              onClick={() => handleClick("user")}
              className={`flex items-center w-full py-2 px-2 relative ${
                activeMenu === "user" ? "bg-gray-700" : ""
              }`}
            >
              <IoMdPeople className="text-4xl" />
              {activeMenu === "user" && (
                <div className="absolute left-0 top-0 h-full w-1 bg-white"></div>
              )}
            </button>
            {activeMenu === "user" && (
              <div className="absolute top-0 w-64 h-screen bg-slate-700 ml-12">
                <ul className="pl-6">
                  <li>
                    <Link to="/add-user" className="block py-2">
                      <IoMdPeople />
                    </Link>
                  </li>
                  <li>
                    <Link to="/manage-user" className="block py-2">
                      Manage User
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li>
            <button
              onClick={() => handleClick("task")}
              className={`flex items-center w-full py-2 px-2 relative ${
                activeMenu === "task" ? "bg-gray-700" : ""
              }`}
            >
              <IoMdCheckmarkCircle className="text-4xl" />
              {activeMenu === "task" && (
                <div className="absolute left-0 top-0 h-full w-1 bg-white"></div>
              )}
            </button>
            {activeMenu === "task" && (
              <div className="absolute top-0 w-64 h-screen bg-slate-700 ml-12">
                <ul className="pl-6">
                  <li>
                    <Link to="/add-task" className="block py-2">
                      Add Task
                    </Link>
                  </li>
                  <li>
                    <Link to="/manage-task" className="block py-2">
                      Manage Task
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
