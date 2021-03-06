import React from 'react'
import { ReactComponent as Sunglasses } from  '../assets/sunglasses.svg'
import { ReactComponent as Sunrise } from  '../assets/sunrise.svg'
import { NavLink } from 'react-router-dom'
import { ThemeConsumer } from '../contexts/theme'


export default function Nav() {
  return (
    <ThemeConsumer>
      {({ theme, toggleTheme }) => (
        <nav className="border-b-4 border-black dark:border-gray-100 font-sans dark:bg-gray-900">
          <div className="max-w-7xl mx-auto flex justify-between xl:border-l-4 xl:border-r-4 border-black dark:border-gray-100">
            <ul className="flex flex-row uppercase font-semibold text-4xl text-gray-800 dark:text-gray-100">
              <NavLink
                  to="/"
                  activeClassName="bg-pink-600 text-white"
                  exact
              >
                <li className="border-r-4 border-black dark:border-gray-100 px-4 sm:px-6 lg:px-8 py-4">
                  Top
                </li>
              </NavLink>
              <NavLink
                  to="/new"
                  activeClassName="bg-pink-600 text-white"
              >
                <li className="px-4 sm:px-6 lg:px-8 py-4 border-r-4 border-black dark:border-gray-100">
                  New
                </li>
              </NavLink>
            </ul>
            <button className="text-4xl px-4 sm:px-6 lg:px-8" onClick={toggleTheme}>
              {theme === 'light'
                ? <Sunglasses className="text-gray-800 dark:text-gray-100 w-16 h-16" />
                : <Sunrise className="text-gray-800 dark:text-gray-100 w-16 h-16" />}
            </button>
          </div>
        </nav>
      )}
    </ThemeConsumer>
  )
}
