import Image from "next/image"
import { useContext, useEffect, useState } from "react"
import ethLogo from '../assets/eth-logo.png'
import { UberContext } from '../context/uberContext'


const style = {

    car: `flex p-3 m-2 items-center border-2 border-white `,
    selectedCar: `border-2 border-black flex p-3 m-2 items-center `,

  }





  const basePrice = 1525



export default function RideSelector () {

  const [carList, setCarList] = useState([])
  const { selectedRide, setSelectedRide, setPrice, basePrice } =
  useContext(UberContext)

  useEffect(() => {
    ;(async () => {
      try {
        const response = await fetch('/api/db/getRideTypes')

        const data = await response.json()
        setCarList(data.data)
        setSelectedRide(data.data[0])
      } catch (error) {
        console.error(error)
      }
    })()
  }, [])


    return (
        <div className=' h-[13rem] flex flex-col'>
        <div className='text-gray-500 text-center text-xs border-b'>Choose a ride, or swipe up for more</div>
        <div className='flex flex-col overflow-y-scroll overflow-x-hidden scrollbar-hide '>
        {carList.map((car:any, index) => (
          <div
            key={index}
            className={`${
              selectedRide.service === car.service
                ? style.selectedCar
                : style.car
            }`}
            onClick={() => {
              setSelectedRide(car)
              setPrice(((basePrice / 10 ** 5) * car.priceMultiplier).toFixed(5))
            }}
          >
            <Image
                    src={car.iconUrl}
                    className=''
                    height={50}
                    width={50} alt={""}            />
            <div className='ml-2 flex-1'>
              <div className='font-medium'>{car.service}</div>
              <div className='text-xs text-blue-500'>5 min away</div>
            </div>
            <div className='flex items-center'>
              <div className='mr-[-0.8rem]'>
                {((basePrice / 10 ** 5) * car.priceMultiplier).toFixed(5)}
              </div>
              <Image src={ethLogo} height={25} width={40} alt={""} />
            </div>
          </div>
        ))}
      </div></div>
    )
}