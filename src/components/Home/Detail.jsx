import React from 'react';
import CountUp from 'react-countup';

export default function Detail() {
    return (
        <div className="max-w-7xl mx-auto px-4 md:px-12 py-10">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center ">
                
                {/* Clients */}
                <div>
                    <h2 className="text-[#0F141A] text-3xl font-bold">
                        <CountUp end={5000} suffix="+" duration={10} />
                    </h2>
                    <p className="text-sm font-medium text-[#0F141A] mt-1">Interior Projects</p>
                </div>

                {/* Visa Process Rate */}
                <div>
                    <h2 className="text-[#0F141A] text-3xl font-bold">
                        <CountUp end={200} suffix="+" duration={10} />
                    </h2>
                    <p className="text-sm font-medium text-[#0F141A] mt-1">Design Experts</p>
                </div>

                {/* Approval Time */}
                <div>
                    <h2 className="text-[#0F141A] text-3xl font-bold">
                        <CountUp end={10} suffix=" Cities" duration={10} />
                    </h2>
                    <p className="text-sm font-medium text-[#0F141A] mt-1">2 Countries</p>
                </div>

                {/* Countries */}
                <div>
                    <h2 className="text-[#0F141A] text-3xl font-bold">
                        <CountUp end={2} suffix="Lac+" duration={10} />
                    </h2>
                    <p className="text-sm font-medium text-[#0F141A] mt-1">Design Options</p>
                </div>

            </div>
        </div>
    );
}
