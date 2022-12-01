import React from "react";

const Nav3 = () => {
  return (
    <div>
      <div className=" flex justify-between">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn btn-ghost bg-green-600 hover:bg-slate-600 text-white w-full"
          >
            <div className="flex items-center gap-3">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
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
            <select className="select select-bordered rounded-none">
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
              className="file-input file-input-bordered w-full max-w-xs rounded-none "
            />
          </div>
          <button className="btn">Search</button>
        </div>
        <div>
            <button className="btn w-full bg-green-600 border-none">
            <p>+8801872400423</p>
            </button>
        </div>
      </div>
    </div>
  );
};

export default Nav3;
