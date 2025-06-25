import React from 'react';

//IMPORTING HELPER COMPONENTS
import Image from 'next/image';
import Link from 'next/link';

//IMPORTING PAGE ASSETS
import logo from '../../../public/logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#171F42] h-[365px] flex items-center justify-between p-10">
      <div className="w-[665px]">
        <span className="flex items-center gap-2">
          <Image src={logo} alt="" />
          <p className="italic inter font-bold text-white">SkillProof</p>
        </span>

        <h1 className="text-white font-bold italic text-3xl">
          Building trust in the freelance economy through blockchain
          verification
        </h1>
      </div>

      <div>
        <ul className="text-white font-manrope flex flex-col gap-3">
          <li className="font-bold text-xl"> Platform </li>
          <li> How it works </li>
          <li> My NFTs </li>
          <li> Verify Work </li>
          <li> Features </li>
        </ul>
      </div>

      <div>
        <ul className="text-white font-manrope flex flex-col gap-3">
          <li className="font-bold text-xl"> Features </li>
          <li> Wallet-based </li>
          <li> Easy Integration </li>
          <li> Client Verification </li>
          <li> Global Platform </li>
          <li> Public Skill Gallery </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
