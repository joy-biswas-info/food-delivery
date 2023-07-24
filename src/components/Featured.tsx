import { featuredProducts } from "@/data";
import Image from "next/image";
import React from "react";

const Featured = () => {
  return (
    <div className=" w-screen overflow-x-scroll text-red-500">
        <div className="w-max flex">
            {/* single item  */}
            {
                featuredProducts.map(item=><div key={item.id}
                 className="w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vw] lg:w-[33vw]"
                 >
                {/* imag div  */}
                <div className="relative flex-1 w-full">
                    {item.img && (
                            <Image src={item.img} alt="product-image" fill className="object-contain hover:rotate-[60deg] transition-all duration-300"/>
                        )}
                </div>
                
                <div className="text-container flex-1 flex flex-col items-center justify-center">
                    <h1 className="text-xl md:text-2xl lg:text:3xl uppercase font-bold text-center my-4">{item.title}</h1>
                    <p className="text-center">{item.desc}</p>
                    <span className="text-xl font-bold my-2">${item.price}</span>
                    <button className="bg-red-500 px-4 py-2 text-white font-semibold rounded-md mt-4">add to cart</button>
                </div>
            </div>)
            }
            
        </div>
    </div>
  );
};

export default Featured;
