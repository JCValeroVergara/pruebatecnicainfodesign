import { useState } from 'react';
import {
  Dashboard,
  Inbox,
  Kanban,
  OpenSidebar,
  Previous,
  SingIn,
  SingUp,
  User,
} from '../../Icons';
import Datepicker from '../DatePicker/Datepicker';
import { Link } from 'react-router-dom';

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);


  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside
      id="default-sidebar"
      className={`sticky z-40 top-0 h-screen transition-transform ${
        isOpen ? 'w-64' : 'w-16'
      }  max-md:w-16`}
      aria-label="Sidebar"
    >
      <div
        className={`h-full px-0 py-4 overflow-y-auto bg-gray-50 dark:bg-indigo-600 max-md:flex max-md:flex-col max-md:items-center max-md:justify-center ${
          isOpen ? '' : 'flex flex-col items-center justify-center'
        }`}
      >
        <a
          href="#"
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-yellow-500 dark:hover:bg-yellow-500 group max-md:hidden"
          onClick={handleOpen}
        >
          {isOpen === true ? (
            <>
              <span className="flex-1 ml-3 max-md:hidden"></span>
              <Previous className="animate-pulse flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white max-md:hidden" />
            </>
          ) : (
            <>
              <OpenSidebar className="animate-pulse flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white max-md:hidden" />
              <span className="flex-1 max-md:hidden"></span>
            </>
          )}
        </a>
        <div className={`max-md:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <Datepicker />
        </div>
        <ul className="space-y-2 font-medium">
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-yellow-500 dark:hover:bg-yellow-500 group"
            >
              <Dashboard className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              <span
                className={`flex-1 ml-9 max-md:hidden ${
                  isOpen ? 'block' : 'hidden'
                }
                `}
              >
                Dashboard
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-yellow-500 dark:hover:bg-yellow-500 group"
            >
              <Kanban className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              <span
                className={`flex-1 ml-9 max-md:hidden ${
                  isOpen ? 'block' : 'hidden'
                }
                `}
              >
                Kanban
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-yellow-500 dark:hover:bg-yellow-500 group"
            >
              <Inbox className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              <span
                className={`flex-1 ml-9 max-md:hidden ${
                  isOpen ? 'block' : 'hidden'
                }
                `}
              >
                Inbox
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-yellow-500 dark:hover:bg-yellow-500 group"
            >
              <User className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              <span
                className={`flex-1 ml-9 max-md:hidden ${
                  isOpen ? 'block' : 'hidden'
                }
                `}
              >
                Users
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-yellow-500 dark:hover:bg-yellow-500 group"
            >
              <Tooltip tooltipText="Texto del tooltip">
                <SingIn className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              </Tooltip>
              <span
                className={`flex-1 ml-9 max-md:hidden ${
                  isOpen ? 'block' : 'hidden'
                }
                `}
              >
                Sign In
              </span>
            </a>
          </li>
          <li>
            <Link to="/">
              <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-yellow-500 dark:hover:bg-yellow-500 group">
                <SingUp className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span
                  className={`flex-1 ml-9 max-md:hidden ${
                    isOpen ? 'block' : 'hidden'
                  }`}
                >
                  Sign Up
                </span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
