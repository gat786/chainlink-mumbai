import React from 'react'

import Image from 'next/image'
import { SocialIcon } from "react-social-icons";

import styles from "../styles/components/SideNav.module.css";

export default function SideNav() {
  return (
    <nav className={`${styles.root} shadow-lg shadow-gray-400`}>
        <div className={`${styles.logoHolder}`}>
            <div className='flex justify-center items-center'>
                <img 
                    src="chainlink-blue-logo.svg" 
                    alt="Chainlink logo" 
                    className={`${styles.chainlinkLogo}`} />
                
                <div>
                    <h1 className='text-custom_blue text-3xl font-medium m-0 p-0'>
                        Chainlink
                    </h1>

                    <span className='uppercase text-xs m-0 p-0'>
                        Mumbai Community
                    </span>
                </div>
            </div>
        </div>

        <ul className={`${styles.navItems}`}>
            <li>
                <span className="material-symbols-outlined">home</span>
                Home
            </li>
            <li>
                <span className="material-symbols-outlined">calendar_month</span>
                Upcoming Events
            </li>
            <li>
                <span className="material-symbols-outlined">star_half</span>
                Past Events
            </li>
            <li>
                <span className="material-symbols-outlined">description</span>
                About Chainlink
            </li>
            <li>
                <span className="material-symbols-outlined">diversity_4</span>
                Our Team
            </li>
            <li>
                <span className="material-symbols-outlined">join_right</span>
                Join us
            </li>
        </ul>

        <div className={`${styles.social_icons_container}`}>
            <span className='uppercase text-gray-600 text-sm'>
                Connect with us here
            </span>
            <ul className='flex gap-2'>
                <li>
                    <Image 
                        src={"/social-icons/twitter-dark-logo.png"}
                        width="24"
                        height={"24"}
                        alt="Join us on Twitter icon"/>
                </li>
                <li>
                    <Image 
                        src={"/social-icons/whatsapp-logo.svg"}
                        width="24"
                        height={"24"}
                        alt="Join us on Whatsapp icon"/>
                </li>
                <li>
                    <span className="material-symbols-outlined">
                        join
                    </span>
                </li>
            </ul>
        </div>
    </nav>
  )
}
