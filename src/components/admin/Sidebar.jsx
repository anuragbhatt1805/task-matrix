/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { useState } from "react";
import { IoMdPersonAdd, IoMdPeople, IoMdCheckmark } from "react-icons/io";

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState("");

  const handleClick = (menu) => {
    setActiveMenu(activeMenu === menu ? "" : menu);
  };

  return (
    <div className="bg-gray-800 text-white left-0 fixed w-64 h-screen flex flex-col px-5 py-4">
      <nav className="w-full">
        <ul>
          <li>
            <button
              onClick={() => handleClick("profile")}
              className="flex items-center w-full py-2"
            >
              <IoMdPersonAdd className="mr-2" />
              Profile
            </button>
            {activeMenu === "profile" && (
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
            )}
          </li>
          <li>
            <button
              onClick={() => handleClick("user")}
              className="flex items-center w-full py-2"
            >
              <IoMdPeople className="mr-2" />
              User
            </button>
            {activeMenu === "user" && (
              <ul className="pl-6">
                <li>
                  <Link to="/add-user" className="block py-2">
                    Add User
                  </Link>
                </li>
                <li>
                  <Link to="/manage-user" className="block py-2">
                    Manage User
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <button
              onClick={() => handleClick("task")}
              className="flex items-center w-full py-2"
            >
              <IoMdCheckmark className="mr-2" />
              Task
            </button>
            {activeMenu === "task" && (
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
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
