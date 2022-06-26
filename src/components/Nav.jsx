import React, { useState } from 'react'

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false)

  const displayMenu = (e) => {
    if (showMenu) {
      setShowMenu(false)
    } else {
      setShowMenu(true)
    }
  }

  return (
    <nav className='text-right'>
      <div className='flex justify-between items-center'>
        <h1 className='font-bold uppercase p-4 border-b border-gray-100'>
          <a href='/' className='hover:text-gray-700 select-none'>
            Food Gunna
          </a>
        </h1>
        <div className='px-4 cursor-pointer md:hidden' onClick={displayMenu}>
          <svg
            className='w-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16M4 18h16'
            ></path>
          </svg>
        </div>
      </div>
      <ul
        className={`text-sm mt-2 md:mt-6 ${showMenu ? '' : 'hidden'} md:block`}
      >
        <li className='text-gray-700 font-bold py-1 border-r-4 border-primary'>
          <a href='/' className='px-4 flex justify-end'>
            <span>Home</span>
            <svg
              className='w-5 ml-2'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z'></path>
            </svg>
          </a>
        </li>
        <li className='py-1 border-r-4 border-transparent'>
          <a href='/' className='px-4 flex justify-end'>
            <span>About</span>
            <svg
              className='w-5 ml-2'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z'
                clipRule='evenodd'
              ></path>
            </svg>
          </a>
        </li>
        <li className='py-1 border-r-4 border-white'>
          <a href='/' className='px-4 flex justify-end'>
            <span>Contact</span>
            <svg
              className='w-5 ml-2'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
              ></path>
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
