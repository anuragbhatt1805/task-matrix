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
import { BsSuitcaseLgFill } from "react-icons/bs";
import { IoAddCircle } from "react-icons/io5";
import { BiCalendar } from "react-icons/bi";

const Sidebar = ({ isSubMenuOpen, setIsSubMenuOpen }) => {
  const [activeMenu, setActiveMenu] = useState("");

  const handleClick = (menu) => {
    const newActiveMenu = activeMenu === menu ? "" : menu;
    setActiveMenu(newActiveMenu);
    setIsSubMenuOpen(newActiveMenu !== "");
  };

  return (
    <div className="bg-gray-800 text-white left-0 top-0 fixed w-16 h-screen flex flex-col gap-4">
      <nav className="w-full flex flex-wrap px-auto justify-center">
        <ul className="flex flex-col">
          <li>
            <button
              onClick={() => handleClick("user")}
              className={`flex items-center w-full py-5 px-2 relative ${
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
                <ul className="pl-6 flex flex-col gap-5 py-5">
                  <li>
                    <Link to="/add-user" className={`block py-2 ${activeMenu === "add-user" ? "bg-green-700" : ""}`}>
                      Add User
                    </Link>
                  </li>
                  <li>
                    <Link to="/calendar" className="block py-2">
                      Calendar
                    </Link>
                  </li>
                  <li>
                    <Link to="/session-record" className="block py-2">
                      Session Records
                    </Link>
                  </li>
                  <li>
                    <Link to="/task-record" className="block py-2">
                      Task Records
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li>
            <button
              onClick={() => handleClick("project")}
              className={`flex items-center w-full py-7 px-2 relative ${
                activeMenu === "project" ? "bg-gray-700" : ""
              }`}
            >
              <BsSuitcaseLgFill className="text-3xl" />
              {activeMenu === "project" && (
                <div className="absolute left-0 top-0 h-full w-1 bg-white"></div>
              )}
            </button>
            {activeMenu === "project" && (
              <div className="absolute top-0 w-64 h-screen bg-slate-700 ml-12">
                 <ul className="pl-6 flex flex-col gap-5 py-5">
                  <li>
                    <Link to="/manage-project" className="block py-2">
                      Manage Team
                    </Link>
                  </li>
                  <li>
                    <Link to="/add-project" className="block py-2">
                      Add Project
                    </Link>
                  </li>

                  <li>
                    <Link to="/all-project" className="block py-2">
                     All Project
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li>
            <button
              onClick={() => handleClick("task")}
              className={`flex items-center w-full py-6 px-2 relative ${
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
                 <ul className="pl-6 flex flex-col gap-5 py-5">
                  <li>
                    <Link to="/add-task" className="block py-2">
                      Add Task
                    </Link>
                  </li>
                  <li>
                    <Link to="/all-task" className="block py-2">
                     All Task
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
