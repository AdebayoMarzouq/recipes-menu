import React, { useState, useEffect } from 'react'

//third party
// import axios from 'axios'

// components
import Nav from '../components/Nav'
// import Button from '../components/Button'
import Header from '../components/Header'
import Card from '../components/Card'
import LoadButton from '../components/LoadButton'
import LoadingCards from '../components/LoadingCards'

//
import picks from '../picksData'
import defaultMenu from '../demoData'

const Home = () => {
  const [isLoading, setIsLoading] = useState(true)
  // const [settings, setSettings] = useState({ isLoading: true })
  const [dailyPicks, setDailyPicks] = useState(picks)
  // const [data, setData] = useState([])
  const [menu, setMenu] = useState(defaultMenu)
  // const [params, setParams] = useState({
  //   from: 0,
  //   size: 1,
  //   tags: '',
  //   q: '',
  // })

  // useEffect(() => {
  //   axios
  //     .get('https://tasty.p.rapidapi.com/recipes/list', {
  //       method: 'GET',
  //       params: params,
  //       headers: {
  //         'X-RapidAPI-Key':
  //           '9273082d49msh250e0c2800782c5p1a46d2jsn8ec9981c8160',
  //         'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
  //       },
  //     })
  //     .then((response) => {
  //       console.log(response.data)
  //       // setData([...response.data])
  //     })
  //     .catch((error) => console.log(error))
  //   return
  // }, [params])

  useEffect(() => {
    let timer = Math.floor(Math.random() * 9000)
    const timeout = setTimeout(() => {
      setIsLoading(false)
    }, timer)

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  return (
    <div className='text-gray-500 font-body grid md:grid-cols-3 h-screen scroll-smooth'>
      <div className='md:col-span-1 md:flex md:justify-end'>
        {/* nav component here */}
        <Nav />
      </div>

      <main className='px-6 md:px-16 py-6 bg-gray-100 md:col-span-2'>
        {/* <div className='flex align-items justify-center md:justify-end'>
          buttons go here
          <Button name='Log in' />
          <Button name='Sign up' />
        </div> */}

        {/* header goes here */}
        <Header />

        {/* cards sections */}
        <div>
          <h4 className='font-bold mt-12 pb-2 border-b border-gray-200 select-none'>
            Latest Recipes
          </h4>
          <div className='mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {/* latest recipe cards here */}
            {isLoading ? (
              <>
                <LoadingCards />
                <LoadingCards />
                <LoadingCards />
                <LoadingCards />
              </>
            ) : (
              dailyPicks.map((item) => <Card key={item.id} {...item} />)
            )}

            {/* card hover:shadow-lg ends */}
          </div>

          <h4 className='font-bold mt-12 pb-2 border-b border-gray-200 select-none'>
            Most Popular
          </h4>
          <div className='mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {/* most popular cards recipe cards go here */}
            {isLoading ? (
              <>
                <LoadingCards />
                <LoadingCards />
                <LoadingCards />
                <LoadingCards />
              </>
            ) : (
              menu.map((item) => <Card key={item.id} {...item} />)
            )}
            {/* card hover:shadow-lg ends */}
          </div>

          <div className='mt-12 flex justify-center'>
            {/* footer button goes here */}
            <LoadButton />
          </div>
        </div>

        {/* card hover:shadow-lg sections end */}
      </main>
    </div>
  )
}

export default Home
