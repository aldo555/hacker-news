import React from 'react'
import { ReactComponent as Birbs } from  '../assets/sun-and-birds.svg'

export default function NoMatch() {
  return (
    <div className="absolute left-0 top-0 w-full h-full flex items-center justify-center flex-col pointer-events-none">
      <Birbs className="text-pink-600 w-64 h-64" />
      <p className="text-gray-700 text-2xl text-center">
        Seems to be nothing here. <br /> Maybe some birbs.
      </p>
    </div>
  )
}
