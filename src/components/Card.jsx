import React from 'react'

const Card = ({ title, info, img, time }) => {
  return (
    <div className='card hover:shadow-lg'>
      <img src={img} alt='Stew' className='w-full h-32 sm:h-48 object-cover' />
      <div className='m-4'>
        <span className='font-bold capitalize'>{title}</span>
        <span className='block text-gray-400 text-sm'>{info.slice()}</span>
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
        <span className='select-none'>{time}</span>
      </div>
    </div>
  )
}

export default Card
