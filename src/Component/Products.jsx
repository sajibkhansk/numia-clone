import React from 'react';
import './Navbar.css'
import { FaArrowRight } from 'react-icons/fa';

const arrowStyles = {
  transition: 'transform 0.2s',
};
const Products = () => {
    return (
        <div>
            <h1 className='text-center text-3xl text-white'>Products</h1>
            <div className='max-w-screen-xl mx-auto grid grid-cols-1 gap-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 text-white'>
            <div className="card card-compact w-96 bg-base-100 shadow-xl mb-10">
  <figure><img src="https://uploads-ssl.webflow.com/646e162a57dc9c48b5ef8bd8/646f147125e89c906ac8ccde_sql-banner-p-1080.png" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Query on-Chain Data</h2>
    <p>Run SQL queries across all Cosmos chains to run analytics for your app and the whole ecosystem</p>
    <div className="card-actions justify-start">
    <ul>
            <li className='text-orange-500 arrow-icon' style={arrowStyles}>
              <div className='flex items-center'> 
                <u className="flex items-center"> 
                  <div>
                    Get Started
                  </div>
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
<div className="card  mb-10 card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="https://uploads-ssl.webflow.com/646e162a57dc9c48b5ef8bd8/646f14cb759f502b1d1ad21c_rpc-banner-p-1080.png" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Scalable and fast RPCs</h2>
    <p>Distributed RPC nodes for all Cosmos chains so that you can focus on product. Scalable, reliable and fast.</p>
    <div className="card-actions justify-start">
    <ul>
            <li className='text-orange-500 arrow-icon' style={arrowStyles}>
              <div className='flex items-center'> 
                <u className="flex items-center"> 
                  <div>
                    Get Started
                  </div>
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
<div className="card mb-10 card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="https://uploads-ssl.webflow.com/646e162a57dc9c48b5ef8bd8/64b7914758a3b6529220b76a_api-banner-p-1080.png" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Aggregated API endpoints</h2>
    <p>A suite of API endpoints that will save you hours of development and complex calculations.</p>
    <div className="card-actions justify-start">
    <ul>
            <li className='text-orange-500 arrow-icon' style={arrowStyles}>
              <div className='flex items-center'> 
                <u className="flex items-center"> 
                  <div>
                    Get Started
                  </div>
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
        </div>
        <hr className='max-w-screen-xl mx-auto ' />
        </div>
    );
};

export default Products;