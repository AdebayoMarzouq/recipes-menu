import React from 'react'

const Button = ({ name }) => {
  return (
    <a
      href='/'
      className='btn text-primary border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-500 ml-2'
    >
      {name}
    </a>
  )
}

export default Button
