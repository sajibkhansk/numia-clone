import React from 'react';
import './Navbar.css'
import { FaArrowRight } from 'react-icons/fa';

const arrowStyles = {
  transition: 'transform 0.2s',
};

const Infrastructure = () => {
  return (
    <div className="hero py-10 my-10  bg-[#1E2028]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <p className="py-6 text-white font-semibold">Numia is an on-chain Data Indexer and RPC provider that gives you the infrastructure to build apps fast and easy.

You can forget about managing complicated infrastructure or running complicated RPC queries for things that should be simple.

Numia does this for you.</p>
        </div>
        <div className="text-white text-2xl card flex-shrink-0 w-full max-w-sm">
          <h1 className='font-bold'>Scalable infrastructure to build Cosmos apps fast and easy.</h1>
          <ul>
            <li className='text-orange-500 arrow-icon' style={arrowStyles}>
              <div className='flex items-center'> 
                <u className="flex items-center"> 
                  <a href='https://docs.numia.xyz/overview/what-is-numia'>
                    Get Started
                  </a>
                  <div className="ml-2"> 
                    <FaArrowRight />
                  </div>
                </u>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Infrastructure;
