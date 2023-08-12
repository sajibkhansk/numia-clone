import React from 'react';

const Logos = () => {
    return (
        <div className='max-w-screen-md mx-auto'>
            <h1>Trusted by the top Projects in Cosmos</h1>
            <a className="btn btn-ghost normal-case text-xl">
                <div className="w-10 rounded-full">
                    <img src="https://img.freepik.com/free-icon/logo_318-195518.jpg" />
                </div> <span className='text-white'> Numia </span>
            </a>
            <a className="btn btn-ghost normal-case text-xl">
                <div className="w-10 rounded-full">
                    <img src="https://img.freepik.com/free-vector/colorful-letter-gradient-logo-design_474888-2309.jpg?w=2000" />
                </div> <span className='text-white'> Acrolab </span>
            </a>
            <a className="btn btn-ghost normal-case text-xl">
                <div className="w-10 rounded-full">
                    <img src="https://img.freepik.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg?w=2000" />
                </div> <span className='text-white'> free</span>
            </a>
            <a className="btn btn-ghost normal-case text-xl">
                <div className="w-20 rounded-full">
                    <img src="https://uploads-ssl.webflow.com/646e162a57dc9c48b5ef8bd8/646e1e1066f31612fe9cfaaf_stride-logo.png" />
                </div> 
            </a>
            <a className="btn btn-ghost normal-case text-xl">
                <div className="w-20 rounded-full">
                    <img src="https://uploads-ssl.webflow.com/646e162a57dc9c48b5ef8bd8/646e7610547b46adab4b5a3e_wynd-logo.png" />
                </div> 
            </a>
        </div>
    );
};

export default Logos;