import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'


import React, { FC } from 'react';
require('@solana/wallet-adapter-react-ui/styles.css');

import styles from '../styles/App.module.css';

import { Context } from '../components/WalletConnection/WalletConnection';
import { BioElement } from '../components/BioElement/BioElement';;
import {NavAppBar} from '../components/Navbar/Navbar';



import twitterLogo from '../public/twitter-logo.svg';
import githubLogo from '../public/github-logo.svg';



const HANDLE = ['https://twitter.com/ujjwalgupta49', 'https://github.com/UjjwalGupta49/'];
const LOGO = [twitterLogo, githubLogo];

export const App: FC = () => {

    return (
        <div>
            <Context>
                <div className={styles.navbarPosition}>        {/* className='navbar-position' */}
                    <NavAppBar  />
                </div>
    
            </Context>
            <div className={styles.baseAppText}>
                <h1>Solana-Base-App 🔥 </h1>
            </div>
            <div>
                <BioElement logo={LOGO} link={HANDLE}></BioElement>
            </div>
        </div>
    );
};

export default App;
