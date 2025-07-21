import React from 'react'
import twobhk from '../../assets/images/2bhk.svg'
import threebhk from '../../assets/images/3bhk.svg'
import threebhkone from '../../assets/images/3bhk1.svg'

export default function Package() {
    return (
        <div>
            <div>
                <div className='max-w-7xl mx-auto px-4 md:px-12 py-10'>
                    <h2 className='heading font-extrabold text-[45px] text-center text-[#0F141A] pb-8'>Package Offers</h2>
                    <div className='flex justify-between  flex-wrap lg:flex-nowrap'>
                        <div className='flex flex-col lg:w-[30%] gap-2 transform transition-transform duration-300 hover:scale-105 cursor-pointer'>
                            <div>
                                <img src={twobhk} alt="" />
                            </div>
                            <div className='flex flex-col'>
                                <h4 className='text-center'>Essential woodwork for a 2BHK</h4>
                                <h4 className='text-center flex justify-center gap-10'>₹6.37 Lac
                                    <h4 className='text-[#919191]'> Off <span className='text-[#F7C000] line-through'>₹8.85 Lac </span></h4></h4>
                            </div>
                        </div>
                        <div className='flex flex-col lg:w-[30%] gap-2 transform transition-transform duration-300 hover:scale-105 cursor-pointer'>
                            <div>
                                <img src={threebhk} alt="" />
                            </div>
                            <div className='flex flex-col'>
                                <h4 className='text-center'>Detailed woodwork for a 3BHK</h4>
                                <h4 className='text-center flex justify-center gap-10'>₹6.37 Lac
                                    <h4 className='text-[#919191]'> Off <span className='text-[#F7C000] line-through'>₹8.85 Lac </span></h4></h4>
                            </div>
                        </div>
                        <div className='flex flex-col lg:w-[30%] gap-2 transform transition-transform duration-300 hover:scale-105 cursor-pointer'>
                            <div>
                                <img src={threebhkone} alt="" />
                            </div>
                            <div className='flex flex-col'>
                                <h4 className='text-center'>Woodwork & beautifications for a 3BHK</h4>
                               <h4 className='text-center flex justify-center gap-10'>₹6.37 Lac
                                    <h4 className='text-[#919191] '> Off <span className='text-[#F7C000] line-through'>₹8.85 Lac </span></h4></h4>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
