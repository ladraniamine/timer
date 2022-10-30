import React, { useState } from 'react'

const Home = () => {
let countdown = new Date("nov 17, 2022 , 13:00:00").getTime();
const [day ,setday] = useState(0)
const [hour ,sethour] = useState(0)
const [minute ,setminute] = useState(0)
const [second ,setsecond] = useState(0)

  let counter = setInterval(()=>{
      //Get Date Now 
      let dateNow = new Date().getTime();
      // find the difrence between Now and Countdonw Date 
      let datedif = countdown - dateNow ;
      // get time unites 
      setday(Math.floor(datedif / 1000 / 60 / 60 / 24))
      sethour(Math.floor((datedif % (1000*60*60*24)) / (1000*60*60)))
      setminute(Math.floor((datedif % (1000*60*60))/(1000*60)))
      setsecond(Math.floor((datedif % (1000*60 ))/(1000)))
  },1000)
  return (
    <section className='home mt-0'>
          {/*------------------------------- BACKGROUND IMAGE------------------------------------------------- */}
          <img className='absolute -z-50 w-full top-0' src={require('../../images/grid.png')}/>
          {/*-------------------------------- IDEATECH HEADER -------------------------------------------------*/}
          <h2 className='text-center mt-40 text-sm md:text-lg  lg:text-2xl font-medium'>ideatech</h2>
          {/*-------------------------------- TITLE OF EVENT --------------------------------------------------*/}
          <div className='mx-auto mt-5 w-1/2'>
            <img className='w-full' src={require("../../images/title.png")}   alt='' />
          </div>
          {/*----------------------------------- BUTTON -------------------------------------------------------*/}
          <a className='bg-black text-white p-2 block w-1/6 m-auto mt-4 rounded-xl font-meduim cursor-pointer hover:bg-transparent hover:text-black border-solid border border-black'>register now</a>
      {/*---------------------------------------  TIMER------------------------------------------------------- */}
      <div className='w-[52%] h-[25vh] m-auto mt-10 grid grid-cols-12'>
        {/*-------------------------------------- DAYES -------------------------------------------------------*/}
        <div className=' col-span-3 p-3'>
          <div className='w-full h-full   relative'>
            <img className='absolute top-0 w-full h-full z-0' src={require("../../images/yellow-paper.png")} />
            <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-1/2 h-1/2 '>
              <p className='text-2xl lg:text-2xl font-bold text-center'>{day<10 ? "0"+day:day}</p>
              <p className='text-2xl text-center font-bold'>days</p>
            </div>
          </div>
        </div>
        {/*-------------------------------------- HOURS------------------------------------------------------- */}
        <div className=' col-span-3 p-3 '>
          <div className='w-full h-full  relative'>
            <img className='absolute top-0 w-full h-full z-0' src={require("../../images/yellow-paper.png")} />
            <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-1/2 h-1/2 '>
              <p className='text-2xl font-bold text-center'>{hour<10 ? "0"+hour:hour}</p>
              <p className='text-center  text-2xl font-bold'>hours</p>
            </div>
          </div>
        </div>
        {/*------------------------------------- MINUTES------------------------------------------------------ */}
        <div className=' col-span-3 p-3 '>
          <div className='w-full h-full  relative'>
            <img className='absolute top-0 w-full h-full z-0' src={require("../../images/yellow-paper.png")} />
            <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-1/2 h-1/2 '>
              <p className='text-2xl font-bold text-center'>{minute<10 ? "0"+minute:minute}</p>
              <p className='text-center  text-2xl font-bold'>mins</p>
            </div>
          </div>
        </div>
        {/*------------------------------------- SECONDS ------------------------------------------------------*/}
        <div className=' col-span-3 p-3 '>
          <div className='w-full h-full  relative'>
            <img className='absolute top-0 w-full h-full z-0' src={require("../../images/yellow-paper.png")} />
            <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-1/2 h-1/2 '>
              <p className='text-2xl font-bold text-center'>{second<10 ? "0"+second:second}</p>
              <p className='text-center  text-2xl font-bold'>secs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home