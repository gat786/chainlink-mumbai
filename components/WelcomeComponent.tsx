import React from 'react'

import styles from "../styles/components/WelcomeComponent.module.css";

export default function WelcomeComponent() {
  return (
    <div className={`${styles.root} m-6 rounded-2xl shadow-lg shadow-gray-4 p-8`}>
        <div id='background-image'></div>
        <div className='flex flex-col text-white'>
            <span className='text-2xl plb-2'>
                Welcome to 
            </span>
            <h1 className='text-4xl font-bold'>
                Smart Contracts - Mumbai Community
            </h1>
        </div>

        <p className='text-white font-light mlb-4'>
            Budding local tech community of people from Mumbai, put together by Chainlink. <br/>
            Organising meetups and events in Mumbai to help developers learn about smart contracts. <br/>
            Creating a vibrant Web3 Ecosystem in Mumbai and thereby for India.
        </p>
    </div>
  )
}
