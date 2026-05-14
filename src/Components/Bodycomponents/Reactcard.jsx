import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../Context/Clientcontext';

export default function CarCard({ image, name, model, rent }) {

    const { user } = useContext(UserContext);

    return (
        <>
            <div className="card rounded-none group shadow-xl" style={{ cursor: "pointer" }}>

                {/* Car Image with hover overlay */}
                <div className="relative">
                    <img className='rounded group-hover:opacity-50 w-full h-56 object-cover' src={image} alt={name} />
                    <div className="opacity-0 group-hover:opacity-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <Link
                            to={user ? '/account' : '/'}
                            className="bg-orange rounded text-white px-8 py-4 font-bold whitespace-nowrap">
                            Reserve now
                        </Link>
                    </div>
                </div>

                {/* Car Details — always visible */}
                <div className="bg-white px-4 py-4 border-t">

                    {/* Car Name and Rent */}
                    <div className="flex justify-between items-center mb-2">
                        <h2 className="font-bold text-lg font-sans">{name}</h2>
                        <span className="text-orange font-bold text-lg">{rent}<span className="text-sm text-[#777]">/day</span></span>
                    </div>

                    {/* Car Model */}
                    <p className="text-[#777] text-base font-sans">{model}</p>

                    {/* Divider */}
                    <div className="border-t my-3"></div>

                    {/* Car Features */}
                    <div className="flex justify-between text-sm text-[#777] font-sans">
                        <span>⚙️ Manual</span>
                        <span>👤 4 Seats</span>
                        <span>❄️ AC</span>
                    </div>

                </div>
            </div>
        </>
    )
}