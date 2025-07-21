import React from "react";
import sofa from "../../assets/images/sofa.svg";
import cup from "../../assets/images/cup.svg";
import mirror from "../../assets/images/mirror.svg";
import bed from "../../assets/images/bed.svg";


export default function DesignGallery() {
    return (
        <section className="bg-[#fefcf9] py-10 px-4">
            <h2 className="text-[44px] font-bold text-center mb-6 heading">
                Design Gallery
            </h2>

            <div className="flex flex-wrap lg:flex-nowrap justify-center  max-w-7xl mx-auto px-4 md:px-12">
                <div className="flex flex-col gap-5 w-[70%]">
                    {/* Left Large Image */}
                    <div className="flex w-[96%] transform transition-transform duration-300 hover:scale-105 cursor-pointer">
                        <img src={sofa} alt="Gallery 1" className="rounded-xl  h-full object-cover" />
                    </div>

                    {/* Two Column Group (Middle) */}
                    <div className="flex  gap-4  w-[96%] ">
                        <div className="flex w-[50%] transform transition-transform duration-300 hover:scale-105 cursor-pointer">
                            <img src={cup} alt="Gallery 2" className="rounded-xl object-cover" />
                            </div>
                            <div className="flex w-[50%] transform transition-transform duration-300 hover:scale-105 cursor-pointer">
                            <img src={mirror} alt="Gallery 3" className=" rounded-xl object-cover" />
                        </div>

                    </div>
                </div>
                {/* Right Image */}
                <div className="flex w-[30%] transform transition-transform duration-300 hover:scale-105 cursor-pointer">
                    <img src={bed} alt="Gallery 4" className="rounded-xl  object-cover" />
                </div>
            </div>
        </section>
    );
}
