import RideSelector from './RideSelector'
import { useContext } from 'react'
import { UberContext } from '../context/uberContext'

export default function Confirm () {


  const {
    currentAccount,
    pickup,
    dropoff,
    price,
    selectedRide,
    pickupCoordinates,
    dropoffCoordinates,
    metamask,
  } = useContext(UberContext)

  const storeTripDetails = async (pickup: any, dropoff: any) => {
    try {
      await fetch('/api/db/saveTrips', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          pickupLocation: pickup,
          dropoffLocation: dropoff,
          userWalletAddress: currentAccount,
          price: price,
          selectedRide: selectedRide,
        }),
      })
    
const costprice = price * 1000000000000000000
  


      await metamask.request({
        method: 'eth_sendTransaction',
        params: [
          {
            from: currentAccount,
            to: process.env.NEXT_PUBLIC_UBER_ADDRESS,
            gas: '0x7EF40', // 520000 Gwei,
            value: Number(costprice).toString(16),
            
          },
        ],
      })
      
      
    } catch (error) {
      console.log(error)
    }
  }





    return(
        <div className=' flex flex-col justify-between '>
        <div className=' flex flex-col'>
        {pickupCoordinates && dropoffCoordinates && <RideSelector />}
        </div>
        <div className='border-t-2 cursor-pointer z-10 '>
          <div className='border-t-2 cursor-pointer z-10 '>
            <div
              className='bg-black text-white mt-5 rounded-xl py-2 text-center text-xl'
              onClick={() => storeTripDetails(pickup, dropoff)}
            >
             Confirm {selectedRide.service || 'UberX'}
            </div>
          </div>
        </div>
      </div>
    )
}