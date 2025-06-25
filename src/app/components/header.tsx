'use client';

import React from 'react';

//IMPORTING HELPER COMPONENTS
import Image from 'next/image';
import { useRouter } from 'next/navigation';

//IMPORTING PAGE ASSETS
import logo from '../../../public/logo.png';

const Header = () => {
  const router = useRouter();

  const connectWallet = () => {
    router.push('/request-verification');
  };

  return (
    <header className="flex justify-between items-center p-6 ">
      <nav className="flex items-center gap-1">
        <Image src={logo} alt="" />
        <p className="italic font-inter font-bold">SkillProof</p>
      </nav>

      <nav>
        <ul className="flex gap-3 font-manrope font-semibold">
          <li> How It Works </li>
          <li> My NFTs </li>
          <li> Verify Work </li>
          <li> Features </li>
        </ul>
      </nav>

      <nav>
        <button
          onClick={connectWallet}
          className="bg-[#2A56C6] font-manrope text-white rounded-lg py-1 px-2"
        >
          {' '}
          Connect Wallet{' '}
        </button>
      </nav>
    </header>
  );
};

export default Header;
