import React from 'react'
import modular from "../../assets/images/modular.svg"
import home from "../../assets/images/home.svg"
import luxury from "../../assets/images/luxury.svg"
import kitchen from "../../assets/images/kitchen.svg"


export default function Offer() {
    return (
        <>
            <div>
                <div className='max-w-7xl mx-auto px-4 md:px-12 py-10'>
                    <h2 className='heading font-extrabold text-[45px] text-center text-[#0F141A] pb-8'>What We Offer</h2>
                    <div className='flex justify-between  flex-wrap lg:flex-nowrap'>
                        <div className='flex flex-col lg:w-[23%] gap-2 transform transition-transform duration-300 hover:scale-105 cursor-pointer'>
                            <div>
                                <img src={modular} alt="" />
                            </div>
                            <div className='border border-[#F7C000] rounded-lg hover:bg-[#F7C000]'>
                                <h4 className='text-center'>Modular Interiors</h4>
                            </div>
                        </div>
                        <div className='flex flex-col lg:w-[23%] gap-2 transform transition-transform duration-300 hover:scale-105 cursor-pointer'>
                            <div>
                                <img src={home} alt="" />
                            </div>
                            <div className='border border-[#F7C000] rounded-lg hover:bg-[#F7C000]'>
                                <h4 className='text-center'>Home Interiors</h4>
                            </div>
                        </div>
                        <div className='flex flex-col lg:w-[23%] gap-2 transform transition-transform duration-300 hover:scale-105 cursor-pointer'>
                            <div>
                                <img src={luxury} alt="" />
                            </div>
                            <div className='border border-[#F7C000] rounded-lg hover:bg-[#F7C000]'>
                                <h4 className='text-center'>Luxury Interiors</h4>
                            </div>
                        </div>
                        <div className='flex flex-col lg:w-[23%] gap-2 transform transition-transform duration-300 hover:scale-105 cursor-pointer'>
                            <div>
                                <img src={kitchen} alt="" />
                            </div>
                            <div className='border border-[#F7C000] rounded-lg hover:bg-[#F7C000]'>
                                <h4 className='text-center'>Kitchen Interiors</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
