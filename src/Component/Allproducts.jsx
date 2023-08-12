import React from 'react';
import cardData from './../../public/cards.json'
const Allproducts = () => {
    return (
        <div className='my-10 text-white'>
            <h1 className='text-center text-3xl mb-10'>Built for all types of projects</h1>
            <div className='max-w-screen-xl mx-auto grid  grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 text-white'>
                {cardData.map((card, index) => (
                    <div key={index} className="card w-75 bg-[#1E2028]  text-white">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-white">{card.title}</h2>
                            <p className='text-white'>{card.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <hr className='max-w-screen-xl mx-auto my-8 py-4' />
        </div>
    );
};

export default Allproducts;