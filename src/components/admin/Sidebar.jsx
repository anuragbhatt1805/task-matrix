/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { useState } from "react";
import { IoMdPeople, IoMdCheckmarkCircle } from "react-icons/io";
import { BsSuitcaseLgFill } from "react-icons/bs";

const Sidebar = ({ isSubMenuOpen, setIsSubMenuOpen }) => {
  const [activeMenu, setActiveMenu] = useState("");
  const [activeSubMenu, setActiveSubMenu] = useState("");
  const userType = localStorage.getItem("userType");

  const handleClick = (menu) => {
    const newActiveMenu = activeMenu === menu ? "" : menu;
    setActiveMenu(newActiveMenu);
    setIsSubMenuOpen(newActiveMenu !== "");
  };

  const handleSubMenuClick = (subMenu) => {
    setActiveSubMenu(subMenu);
  };

  return (
    <div className="bg-gray-800 text-white left-0 top-0 fixed w-16 h-screen flex flex-col">
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
              <div className="absolute top-0 w-60 h-screen bg-slate-700 ml-12">
                {userType === "admin" && (
                  <ul className="pl-6 flex flex-col gap-5 py-5">
                    <li>
                      <Link
                        to="/add-user"
                        onClick={() => handleSubMenuClick("add-user")}
                        className={`block py-2 ${
                          activeSubMenu === "add-user"
                            ? "bg-white text-gray-900 pl-5 font-bold"
                            : ""
                        }`}
                      >
                        Add User
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/calendar"
                        onClick={() => handleSubMenuClick("calendar")}
                        className={`block py-2 ${
                          activeSubMenu === "calendar"
                            ? "bg-white text-gray-900 pl-5 font-bold"
                            : ""
                        }`}
                      >
                        Calendar
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/session-record"
                        onClick={() => handleSubMenuClick("session-record")}
                        className={`block py-2 ${
                          activeSubMenu === "session-record"
                            ? "bg-white text-gray-900 pl-5 font-bold"
                            : ""
                        }`}
                      >
                        Session Records
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/task-record"
                        onClick={() => handleSubMenuClick("task-record")}
                        className={`block py-2 ${
                          activeSubMenu === "task-record"
                            ? "bg-white text-gray-900 pl-5 font-bold"
                            : ""
                        }`}
                      >
                        Task Records
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/notification"
                        onClick={() => handleSubMenuClick("notification")}
                        className={`block py-2 ${
                          activeSubMenu === "notification"
                            ? "bg-white text-gray-900 pl-5 font-bold"
                            : ""
                        }`}
                      >
                        Notification
                      </Link>
                    </li>
                  </ul>
                )}
                {userType === "manager" && (
                  <ul className="pl-6 flex flex-col gap-5 py-5">
                    <li>
                      <Link
                        to="/calendar"
                        onClick={() => handleSubMenuClick("calendar")}
                        className={`block py-2 ${
                          activeSubMenu === "calendar"
                            ? "bg-white text-gray-900 pl-5 font-bold"
                            : ""
                        }`}
                      >
                        Calendar
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/session-record"
                        onClick={() => handleSubMenuClick("session-record")}
                        className={`block py-2 ${
                          activeSubMenu === "session-record"
                            ? "bg-white text-gray-900 pl-5 font-bold"
                            : ""
                        }`}
                      >
                        Session Records
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/task-record"
                        onClick={() => handleSubMenuClick("task-record")}
                        className={`block py-2 ${
                          activeSubMenu === "task-record"
                            ? "bg-white text-gray-900 pl-5 font-bold"
                            : ""
                        }`}
                      >
                        Task Records
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/notification"
                        onClick={() => handleSubMenuClick("notification")}
                        className={`block py-2 ${
                          activeSubMenu === "notification"
                            ? "bg-white text-gray-900 pl-5 font-bold"
                            : ""
                        }`}
                      >
                        Notification
                      </Link>
                    </li>
                  </ul>
                )}
                {userType === "user" && (
                  <ul className="pl-6 flex flex-col gap-5 py-5">
                    <li>
                      <Link
                        to="/calendar"
                        onClick={() => handleSubMenuClick("calendar")}
                        className={`block py-2 ${
                          activeSubMenu === "calendar"
                            ? "bg-white text-gray-900 pl-5 font-bold"
                            : ""
                        }`}
                      >
                        Calendar
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/session-record"
                        onClick={() => handleSubMenuClick("session-record")}
                        className={`block py-2 ${
                          activeSubMenu === "session-record"
                            ? "bg-white text-gray-900 pl-5 font-bold"
                            : ""
                        }`}
                      >
                        Session Records
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/task-record"
                        onClick={() => handleSubMenuClick("task-record")}
                        className={`block py-2 ${
                          activeSubMenu === "task-record"
                            ? "bg-white text-gray-900 pl-5 font-bold"
                            : ""
                        }`}
                      >
                        Task Records
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/notification"
                        onClick={() => handleSubMenuClick("notification")}
                        className={`block py-2 ${
                          activeSubMenu === "notification"
                            ? "bg-white text-gray-900 pl-5 font-bold"
                            : ""
                        }`}
                      >
                        Notification
                      </Link>
                    </li>
                  </ul>
                )}
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
              <div className="absolute top-0 w-60 h-screen bg-slate-700 ml-12">
                {userType === "admin" && (
                  <ul className="pl-6 flex flex-col gap-5 py-5">
                    <li>
                      <Link
                        to="/add-project"
                        onClick={() => handleSubMenuClick("add-project")}
                        className={`block py-2 ${
                          activeSubMenu === "add-project"
                            ? "bg-white text-gray-900 pl-5 font-bold"
                            : ""
                        }`}
                      >
                        Add Project
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/all-project"
                        onClick={() => handleSubMenuClick("all-project")}
                        className={`block py-2 ${
                          activeSubMenu === "all-project"
                            ? "bg-white text-gray-900 pl-5 font-bold"
                            : ""
                        }`}
                      >
                        All Project
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/manage-project"
                        onClick={() => handleSubMenuClick("manage-project")}
                        className={`block py-2 ${
                          activeSubMenu === "manage-project"
                            ? "bg-white text-gray-900 pl-5 font-bold"
                            : ""
                        }`}
                      >
                        Manage Team
                      </Link>
                    </li>
                  </ul>
                )}
                {userType === "manager" && (
                  <ul className="pl-6 flex flex-col gap-5 py-5">
                    <li>
                      <Link
                        to="/manage-project"
                        onClick={() => handleSubMenuClick("manage-project")}
                        className={`block py-2 ${
                          activeSubMenu === "manage-project"
                            ? "bg-white text-gray-900 pl-5 font-bold"
                            : ""
                        }`}
                      >
                        Manage Team
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/all-project"
                        onClick={() => handleSubMenuClick("all-project")}
                        className={`block py-2 ${
                          activeSubMenu === "all-project"
                            ? "bg-white text-gray-900 pl-5 font-bold"
                            : ""
                        }`}
                      >
                        All Project
                      </Link>
                    </li>
                  </ul>
                )}
                {userType === "user" && (
                  <ul className="pl-6 flex flex-col gap-5 py-5">
                    <li>
                      <Link
                        to="/all-project"
                        onClick={() => handleSubMenuClick("all-project")}
                        className={`block py-2 ${
                          activeSubMenu === "all-project"
                            ? "bg-white text-gray-900 pl-5 font-bold"
                            : ""
                        }`}
                      >
                        All Project
                      </Link>
                    </li>
                  </ul>
                )}
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
              <div className="absolute top-0 w-60 h-screen bg-slate-700 ml-12">
                {(userType === "admin" || userType === "manager") && (
                     <ul className="pl-6 flex flex-col gap-5 py-5">
                     <li>
                       <Link
                         to="/my-task"
                         onClick={() => handleSubMenuClick("my-task")}
                         className={`block py-2 ${
                           activeSubMenu === "my-task"
                             ? "bg-white text-gray-900 pl-5 font-bold"
                             : ""
                         }`}
                       >
                         My Task
                       </Link>
                     </li>
                     <li>
                       <Link
                         to="/add-task"
                         onClick={() => handleSubMenuClick("add-task")}
                         className={`block py-2 ${
                           activeSubMenu === "add-task"
                             ? "bg-white text-gray-900 pl-5 font-bold"
                             : ""
                         }`}
                       >
                         Add Task
                       </Link>
                     </li>
                     <li>
                       <Link
                         to="/approve-task"
                         onClick={() => handleSubMenuClick("approve-task")}
                         className={`block py-2 ${
                           activeSubMenu === "approve-task"
                             ? "bg-white text-gray-900 pl-5 font-bold"
                             : ""
                         }`}
                       >
                         Approve Task
                       </Link>
                     </li>
                     <li>
                       <Link
                         to="/all-task"
                         onClick={() => handleSubMenuClick("all-task")}
                         className={`block py-2 ${
                           activeSubMenu === "all-task"
                             ? "bg-white text-gray-900 pl-5 font-bold"
                             : ""
                         }`}
                       >
                         All Task
                       </Link>
                     </li>
                   </ul>
                )}
               {userType==="user" && (
                 <ul className="pl-6 flex flex-col gap-5 py-5">
                 <li>
                   <Link
                     to="/my-task"
                     onClick={() => handleSubMenuClick("my-task")}
                     className={`block py-2 ${
                       activeSubMenu === "my-task"
                         ? "bg-white text-gray-900 pl-5 font-bold"
                         : ""
                     }`}
                   >
                     My Task
                   </Link>
                 </li>
                 
                 <li>
                   <Link
                     to="/all-task"
                     onClick={() => handleSubMenuClick("all-task")}
                     className={`block py-2 ${
                       activeSubMenu === "all-task"
                         ? "bg-white text-gray-900 pl-5 font-bold"
                         : ""
                     }`}
                   >
                     All Task
                   </Link>
                 </li>
               </ul>
               )}
              </div>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
