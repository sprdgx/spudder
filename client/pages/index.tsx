
import Map from '../components/Map'
import LocationSelector from '../components/LocationSelector'
import Confirm from '@/components/Confirm'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Head from 'next/head'



export default function Home() {

const [ open , setOpen] = useState (false)


  return (

    <><Head>
      <title>SPUDDER</title>
      <meta name="description" content="WEB3 UBER" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="https://raw.githubusercontent.com/sprdgx/Photos/main/Spudder.png" />
    </Head><div className='h-screen w-screen  flex flex-col  overflow-hidden '>
        <Navbar />
        <div className='  peer h-screen w-screen '>
          <Map />
        </div>

        <div className="relative flex items-end justify-end pr-[0.8rem] bottom-[30rem] ">
          <button className={`relative lg:hidden h-14 w-14 rounded-full ${open ? 'bg-neutral-700' : 'bg-black'}   transition`} onClick={() => setOpen(!open)}>
            <span className="text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 m-auto " viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zm0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708z" />
              </svg>
            </span>
          </button>
          <div className={` ${open ? 'left-[0.7rem]' : 'left-[30rem]'}  fixed rounded-xl lg:top-[9rem] top-[12.5rem]  lg:left-[3rem] h-[30rem] w-9/12 lg:w-72 bg-white shadow-2xl  peer:transition ease-out delay-150 duration-200`}>
            <nav role="navigation" className="p-6">
              <div className="items-center gap-4 pb-4 ">
                <LocationSelector />
                <Confirm />
              </div>
            </nav>
          </div>
        </div>


      </div></>
  )
}