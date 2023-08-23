import React from 'react'
import Image from 'next/image'
import CountDown from './CountDown'

const Offer = () => {
  return (
    <div className='bg-black h-screen flex flex-col md:flex-row md:justify-between md:h-[70vh]'>
      {/* TEXT CONTAINER */}
      <div className='flex-1 flex flex-col justify-center items-center text-center gap-8 p-6'>
        <h1 className='text-white text-5xl font-bold xl:text-6xl'>Delicious Burger & French Fry</h1>
        <p className='text-white xl:text-xl'> Indulge in the mouthwatering delight of our signature Delicious Burger & French Fry combo. Sink your teeth into a perfectly grilled, juicy burger crafted to perfection, featuring a succulent patty made from the finest blend of premium beef, seasoned with our secret blend of spices. Each bite bursts with flavor, offering a tantalizing symphony of tastes that will leave your taste buds dancing with joy. </p>
        <p className='text-white xl:text-xl'>This promo lasts until.</p>
        <CountDown/>
        <button className='bg-red-500 text-white rounded-md py-3 px-6'>Order Now</button>
      </div> 
      {/* IMAGE CONTAINER */}
      <div className='hidden md:flex md:flex-1 flex-1 w-full relative md:h-full' style={{ backgroundImage: 'url("/offerBg.png")', backgroundSize: 'cover' }}>
        <Image src="/offerProduct.png" alt="" fill className='object-contain'/>
      </div> 
    </div>
  );
};

export const dynamic = 'force-dynamic';
export default Offer