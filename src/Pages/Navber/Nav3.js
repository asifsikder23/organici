import React from "react";

const Nav3 = () => {
  return (
    <div className="my-3">
      <div className=" flex justify-between">
        <div className="dropdown hidden lg:flex">
          <label
            tabIndex={0}
            className="btn btn-ghost bg-green-600 hover:bg-slate-600 text-white"
          >
            <div className="flex items-center">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </div>

              <div>
                <p>Shop Category</p>
              </div>
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-green-500-100 rounded-box w-52 mt-14"
          >
            <li>
              <a>Homepage</a>
            </li>
            <li>
              <a>Portfolio</a>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
        </div>
        <div className="flex navbar-center">
          <div className="form-control ">
            <select className="select select-bordered rounded-none w-32 lg:w-full">
              <option disabled selected>
                All Categories
              </option>
              <option>Star Wars</option>
              <option>Harry Potter</option>
              <option>Lord of the Rings</option>
              <option>Planet of the Apes</option>
              <option>Star Trek</option>
            </select>
          </div>
          <div>
            <input
              type="text"
              className="file-input file-input-bordered w-full lg:w-96 rounded-none "
            />
          </div>
          <button className="btn"><span className="hidden lg:flex">Search</span>
          <i class="fa-solid fa-magnifying-glass flex lg:hidden"></i>
          </button>
          
        </div>
        <div className="hidden lg:flex">
          <button className="btn w-full bg-green-600 border-none">
            <p>+8801872400423</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav3;
