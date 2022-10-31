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

let paper_image = "absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]   w-full h-full z-[-1]";
let time_grid_comtainer = "col-span-3 p-0 lg:p-3";
let count_nom = "text-md lg:text-xl xl:text-2xl font-bold text-center";
let count_string = "text-md lg:text-xl xl:text-2xl font-bold text-center";

  return (
    <section className='home mt-0'>
          {/*-------------------------------- IDEATECH HEADER -------------------------------------------------*/}
          <h2 className='text-center mt-40 text-sm md:text-lg  lg:text-2xl font-medium'>ideatech</h2>
          {/*-------------------------------- TITLE OF EVENT --------------------------------------------------*/}
          <div className='mx-auto mt-5 w-[80%] md:w-[60%] lg:w-1/2'>
            <img className='w-full' src={require("../../images/title.png")}   alt='' />
          </div>
          {/*----------------------------------- BUTTON -------------------------------------------------------*/}
          <button className='bg-black text-white p-2 block w-1/5 lg:w-1/6 m-auto mt-4 rounded-xl font-meduim cursor-pointer hover:bg-transparent hover:text-black border-solid border border-black text-[11px] md:text-sm '>register now</button>
      {/*---------------------------------------  TIMER------------------------------------------------------- */}
      <div className='w-[400px] h-[100px] lg:w-[52%] lg:h-[25vh] m-auto mt-10 grid grid-cols-12'>
        {/*-------------------------------------- DAYES -------------------------------------------------------*/}
        <div className={time_grid_comtainer}>
          <div className='w-full h-full   relative'>
            <img className={paper_image} src={require("../../images/yellow-paper.png")} />
            <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-1/2 h-1/2 z-[-1]'>
              <p className={count_nom}>{day<10 ? "0"+day:day}</p>
              <p className={count_string}>days</p>
            </div>
          </div>
        </div>
        {/*-------------------------------------- HOURS------------------------------------------------------- */}
        <div className={time_grid_comtainer}>
          <div className='w-full h-full  relative'>
            <img className={paper_image} src={require("../../images/yellow-paper.png")} />
            <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-1/2 h-1/2 z-[-1]'>
              <p className={count_nom}>{hour<10 ? "0"+hour:hour}</p>
              <p className={count_string}>hours</p>
            </div>
          </div>
        </div>
        {/*------------------------------------- MINUTES------------------------------------------------------ */}
        <div className={time_grid_comtainer}>
          <div className='w-full h-full  relative'>
            <img className={paper_image} src={require("../../images/yellow-paper.png")} />
            <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-1/2 h-1/2 z-[-1]'>
              <p className={count_nom}>{minute<10 ? "0"+minute:minute}</p>
              <p className={count_string}>mins</p>
            </div>
          </div>
        </div>
        {/*------------------------------------- SECONDS ------------------------------------------------------*/}
        <div className={time_grid_comtainer}>
          <div className='w-full h-full  relative'>
            <img className={paper_image} src={require("../../images/yellow-paper.png")} />
            <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-1/2 h-1/2 z-[-1]'>
              <p className={count_nom}>{second<10 ? "0"+second:second}</p>
              <p className={count_string}>secs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home