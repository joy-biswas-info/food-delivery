import Image from 'next/image';
import React from 'react';
import CountDown from './CountDown';

const Offer = () => {
    return (
        <div className='bg-black h-screen md:h-[70vh] bg-[url("/offerBg.png")]  flex flex-col p-4 my-4 md:flex-row justify-center items-center'>
            {/* Text  */}
            <div className='flex-1 flex flex-col items-center'>
                <h1 className='text-2xl md:text-4xl p-2 md:p-4 font-bold text-white text-center'>Consectetur adipisicing elit.</h1>
                <p className='text-white text-center p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Dolores excepturi ex earum? Natus beatae ex temporibus dolorum </p>
                    <CountDown/>
                <button className="bg-red-500 text-white font-bold py-2 px-4 my-2 rounded center">
                    Order Now
                </button>
            </div>
            {/* image  */}
            <div className='relative w-full flex-1 h-screen'>
                <Image src="/offerProduct.png" alt='' fill className='object-contain'/>
            </div>
        </div>
    );
};

export default Offer;