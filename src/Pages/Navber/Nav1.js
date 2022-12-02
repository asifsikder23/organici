import React from "react";

const Nav1 = () => {
  return (
    <div className="bg-green-600 px-4 py-5 lg:py-1 text-white block">
      <div className=" sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="flex justify-center gap-4">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-pinterest"></i>
          <i className="fab fa-linkedin-in"></i>
          <i className="fab fa-youtube"></i>
        </div>
        <div className="hidden lg:flex justify-between gap-3">
          <div>
            <i className="fas fa-envelope"></i>
          </div>
          <div>
            <p>organici@gmail.com</p>
          </div>
        </div>
        

        <a
          className="mt-4 block rounded-lg bg-green-200 px-5 py-3 text-center text-sm font-medium text-green-600 transition hover:bg-white/90 focus:outline-none focus:ring active:text-green-500 sm:mt-0"
          href="/alpinejs"
        >
          % Today's Offer Zone
        </a>
      </div>
    </div>
  );
};

export default Nav1;
