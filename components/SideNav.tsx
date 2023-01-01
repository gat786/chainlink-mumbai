import React from 'react'
import styles from "../styles/components/SideNav.module.css";

export default function SideNav() {
  return (
    <nav className={`${styles.root}`}>
        <div className=''>
            <img 
                src="chainlink-blue-logo.svg" 
                alt="Chainlink logo" 
                className={`${styles.chainlinkLogo}`} />
            
            <div>
                <h1>
                    Chainlink
                </h1>

                <span>
                    Mumbai Community
                </span>
            </div>
        </div>
    </nav>
  )
}
