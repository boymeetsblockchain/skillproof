import React from 'react';

//IMPORTING HELPER COMPONENTS
import Image from 'next/image';

//IMPORTING PAGE ASSETS
import logo from '../../../public/logo.png';

const Header = () => {
  return (
    <header className="flex justify-between items-center py-8 px-4">
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
        <button className="bg-[#2A56C6] font-manrope text-white rounded-lg py-1 px-2">
          {' '}
          Connect Wallet{' '}
        </button>
      </nav>
    </header>
  );
};

export default Header;
