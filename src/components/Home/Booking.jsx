import React from "react";
import booking from '../../assets/images/booking.svg'

export default function Booking() {
    return (
        <section className="px-4 py-10 bg-white">
            <div className="max-w-7xl mx-auto px-4 md:px-12  flex flex-wrap justify-between lg:flex-nowrap items-center gap-8">

                {/* Image */}
                <div className="flex justify-center items-center w-full lg:w-[45%]">
                    <img
                        src={booking}
                        alt="Home interior"
                        className=" rounded-xl "
                    />
                </div>

                {/* Content */}
                <div className="flex flex-col  lg:w-[48%]">
                    <h1 className="relative text-3xl md:text-[45px] lg:w-[80%]  font-extrabold heading mb-8">
                        Home Interiors Made Easy
                        <span className="absolute left-0 -bottom-1 w-14 h-1 bg-yellow-500 "></span>

                    </h1>

                    <p className="text-[#0F141A] text-[14px] lg:w-[80%]">
                        Book a FREE consultation and get expert guidance from 400+ top
                        designers. With 10,000+ homes transformed, your dream home is just
                        a step away!
                    </p>

                    {/* Steps */}
                    {/* Steps */}
                    <div className="flex flex-wrap gap-4 mt-6">
                        {/* Step 01 */}
                        <div className="flex items-center gap-4 w-full sm:w-[48%]">
                            <div className="bg-yellow-500 text-black font-bold px-4 py-2 rounded">01</div>
                            <span className="text-[#0F141A] text-sm font-medium">Book an appointment</span>
                        </div>

                        {/* Step 02 */}
                        <div className="flex items-center gap-4 w-full sm:w-[48%]">
                            <div className="bg-black text-white font-bold px-4 py-2 rounded">02</div>
                            <span className="text-[#0F141A] text-sm font-medium">Meet our designers</span>
                        </div>

                        {/* Step 03 */}
                        <div className="flex items-center gap-4 w-full sm:w-[48%]">
                            <div className="bg-yellow-500 text-black font-bold px-4 py-2 rounded">03</div>
                            <span className="text-[#0F141A] text-sm font-medium">Personalise your designs</span>
                        </div>

                        {/* Step 04 */}
                        <div className="flex items-center gap-4 w-full sm:w-[48%]">
                            <div className="bg-black text-white font-bold px-4 py-2 rounded">04</div>
                            <span className="text-[#0F141A] text-sm font-medium">Move in</span>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
}
