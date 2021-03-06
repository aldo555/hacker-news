import React from 'react'
import { ReactComponent as Sunglasses } from  '../assets/sunglasses.svg';
import { NavLink } from 'react-router-dom'


export default function Nav() {
  return (
    <nav className="border-b-4 border-black font-sans">
      <div className="max-w-7xl mx-auto flex justify-between xl:border-l-4 xl:border-r-4 border-black">
        <ul className="flex flex-row uppercase font-semibold text-4xl text-gray-800">
          <NavLink
              to="/"
              activeClassName="bg-pink-600 text-white"
              exact
          >
            <li className="border-r-4 border-black px-4 sm:px-6 lg:px-8 py-4">
              Top
            </li>
          </NavLink>
          <NavLink
              to="/new"
              activeClassName="bg-pink-600 text-white"
          >
            <li className="px-4 sm:px-6 lg:px-8 py-4 border-r-4 border-black">
              New
            </li>
          </NavLink>
        </ul>
        <button className="text-4xl px-4 sm:px-6 lg:px-8">
          <Sunglasses className="text-gray-800 w-16 h-16" />
        </button>
      </div>
    </nav>
  )
}
