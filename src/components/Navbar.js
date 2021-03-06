import React from 'react'
import { ReactComponent as Sunglasses } from  '../assets/sunglasses.svg';


export default function Nav() {
  return (
    <nav className="border-b-4 border-black font-sans">
      <div className="max-w-7xl mx-auto flex justify-between border-l-4 border-r-4 border-black">
        <ul className="flex flex-row uppercase font-semibold text-4xl text-gray-800">
          <li className="bg-pink-600 border-r-4 border-black text-white px-4 sm:px-6 lg:px-8 py-4">
            Top
          </li>
          <li className="px-4 sm:px-6 lg:px-8 py-4 border-r-4 border-black">
            New
          </li>
        </ul>
        <button className="text-4xl px-4 sm:px-6 lg:px-8">
          <Sunglasses className="text-gray-800 w-16 h-16" />
        </button>
      </div>
    </nav>
  )
}
