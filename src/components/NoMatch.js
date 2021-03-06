import React from 'react'
import { ReactComponent as Birbs } from  '../assets/sun-and-birds.svg'

const styles = {
  top: '76px',
  height: 'calc(100vh - 76px)'
}

export default function NoMatch() {
  return (
    <div style={styles} className="absolute left-0 w-full flex items-center justify-center flex-col pointer-events-none dark:bg-gray-800">
      <Birbs className="text-pink-600 w-64 h-64" />
      <p className="text-gray-700 text-2xl text-center">
        Seems to be nothing here. <br /> Maybe some birbs.
      </p>
    </div>
  )
}
