import React from 'react'

const LoadingCards = () => {
  return (
    <div className='card loader hover:shadow-lg'>
      <div className='animate-pulse flex flex-col'>
        <div className='w-full h-32 sm:h-48 bg-gray-200'></div>
        <div className='h-full m-4'>
          <span className='block h-5 bg-gray-200 mb-2 rounded'></span>
          <span className='block h-4 bg-gray-200 rounded'></span>
        </div>
        <div className='badge flex items-center'>
          <svg
            className='w-5 h-5'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z'
              clipRule='evenodd'
            ></path>
          </svg>
          <span className='select-none'>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
        </div>
      </div>
    </div>
  )
}

export default LoadingCards
