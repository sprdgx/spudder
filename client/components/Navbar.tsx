import Image from "next/image";
import avatar from '../temp/avatar.png'
import { BsPerson } from 'react-icons/bs'
import { useState,useContext } from 'react'
import { UberContext } from '../context/uberContext'
import {BiMenu} from 'react-icons/bi'




export default function Navbar () {

  const { currentAccount, connectWallet, currentUser  } = useContext(UberContext)



    return (
        <div className="h-screen bg-black   ">
    <div className=" border-b  ">
        <div className="px-6  container mx-auto  ">
          <div className=" items-center justify-between lg:flex ">
            <div className=" bg-white rounded-xl ml-[0rem] px-[1rem] m-5 ">
              <a href="#">
              <div className=' text-4xl text-black   cursor-pointer font-serif hidden lg:inline'>SPUDDER</div>
              </a>
            </div>

                  <ul className="px-6  text-gray-700 md:px-12 space-y-0  space-x-12 flex pt-0">
                    <li className="px-[5rem] pt-[0rem] hidden lg:inline">
                      <a href="/" className="group  before: before:inset-x-0 before:bottom-0 before:h-2 before:origin-right before:scale-x-0 before:bg-cyan-800 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100">
                        <span className=" text-white font-mono text-2xl lg:text-lg ">Home</span>
                      </a>
                    </li>
                    <li className="pr-[5rem] pt-[0rem] hidden lg:inline">
                      <a href="/" className="group  before: before:inset-x-0 before:bottom-0 before:h-2 before:origin-right before:scale-x-0 before:bg-cyan-800 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100">
                        <span className="  group-hover:text-white font-mono lg:text-lg text-2xl">Ride</span>
                      </a>
                    </li>
                    <li className="pr-[5rem] pt-[0rem]  hidden lg:inline ">
                      <a href="/" className="group  before: before:inset-x-0 before:bottom-0 before:h-2 before:origin-right before:scale-x-0 before:bg-cyan-800 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100">
                        <span className=" group-hover:text-white font-mono lg:text-lg text-2xl ">Drive</span>
                      </a>
                    </li>
                  </ul>
            
            
            
            
            
            <div className="bg-white mx-[1rem] mb-[1rem] lg:mb-[0rem] rounded-2xl flex">
                <div className='text-lg ml-[1.5rem]  text-black font-medium items-center cursor-pointer mt-2'>{currentUser.name?.split(' ')[0]}</div>
                <Image className=' my-1 mx-5 h-10 w-10 rounded-full object-cover cursor-pointer'src={ currentUser.imageUrl || avatar} width={0} height={0} alt=""/>
            
          {currentAccount ? (
          <div className="text-black mt-2.5 mr-[4rem] ">
            {currentAccount.slice(0, 6)}...{currentAccount.slice(39)}
          </div>
        ) : (
          <div className='flex text-white items-center cursor-pointer rounded-full my-2 hover:bg-[#333333] px-5 bg-[#333333]'  onClick={() => connectWallet()} >
            <BsPerson />
            <span className='ml-2 text-md '>Login</span>
          </div>
        )}
        </div>
        </div>
                </div>
            </div>
          </div>
    )
}