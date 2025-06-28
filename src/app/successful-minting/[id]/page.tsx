import React from 'react';

//IMPORTING HELPER COMPONENTS
import Image from 'next/image';

//IMPORTING PAGE ASSETS
import success from '../../../../public/success.png';
import party from '../../../../public/party.png';
import miniWallet from '../../../../public/mini-wallet.png';
import copy from '../../../../public/copy.png';
import share from '../../../../public/share.png';
import link from '../../../../public/link.png';

const MintSuccessPage = () => {
  return (
    <main className="p-10">
      <section className="flex flex-col items-center gap-3">
        <Image src={success} alt="" />
        <p className="flex items-center gap-2 font-manrope font-semibold text-2xl">
          <Image src={party} alt="" /> NFT minted successfully
        </p>
        <p className="font-manrope font-semibold">
          Your work has been permanently been minted and recorded on the
          blockchain
        </p>
      </section>

      <section className="mt-15">
        <div className="success-hero-background flex justify-between py-10 px-20 rounded-t-2xl">
          <span className="flex flex-col gap-6">
            <p className="font-manrope font-bold text-2xl text-white">
              E-commerce Website
            </p>
            <p className="font-manrope text-2xl text-white">Token ID: #202</p>
          </span>

          <span className="flex flex-col gap-6">
            <p className="font-manrope text-2xl text-white">Minted On</p>
            <p className="font-manrope text-2xl font-bold text-white">
              Ethereum
            </p>
          </span>
        </div>

        {/* PROJECT DETAILS */}
        <div className="bg-[#2A56C626] py-10 px-20 shadow-xl rounded-b-lg">
          {/* FIRST LINE */}
          <div className="flex items-center justify-between gap-20">
            <div className="w-full">
              <p className="flex items-center gap-1 font-manrope text-xl font-semibold mb-2">
                <Image src={miniWallet} alt="" /> Client Wallet Address
              </p>

              <span className="border-2 border-gray-400 rounded-lg p-3 flex items-center justify-between">
                <p className="font-manrope font-semibold text-lg">
                  ox567d........Fed4
                </p>

                <span className="flex items-center gap-4">
                  <button className="p-4 bg-[#2A56C629] rounded-full">
                    {' '}
                    <Image src={copy} alt="" />{' '}
                  </button>
                  <button className="p-4 bg-[#2A56C629] rounded-full">
                    {' '}
                    <Image src={share} alt="" />{' '}
                  </button>
                </span>
              </span>
            </div>

            <div className="w-full">
              <p className="flex items-center gap-1 font-manrope text-xl font-semibold mb-2">
                <Image src={link} alt="" /> IPFS URI
              </p>

              <span className="border-2 border-gray-400 rounded-lg p-3 flex items-center justify-between">
                <p className="font-manrope font-semibold text-lg">
                  ipfs://qmYqaPJ6Jxcz...
                </p>

                <span className="flex items-center gap-4">
                  <button className="p-4 bg-[#2A56C629] rounded-full">
                    {' '}
                    <Image src={copy} alt="" />{' '}
                  </button>
                  <button className="p-4 bg-[#2A56C629] rounded-full">
                    {' '}
                    <Image src={share} alt="" />{' '}
                  </button>
                </span>
              </span>
            </div>
          </div>

          {/* SECOND LINE */}
          <div className="mt-10 flex justify-between gap-20">
            <div className="w-full">
              <p className="flex items-center gap-1 font-manrope text-xl font-semibold mb-2">
                Transaction Hash
              </p>

              <span className="border-2 border-gray-400 rounded-lg p-3 flex items-center justify-between">
                <p className="font-manrope font-semibold text-lg">
                  ox567d........Fed4
                </p>

                <span className="flex items-center gap-4">
                  <button className="p-4 bg-[#2A56C629] rounded-full">
                    {' '}
                    <Image src={copy} alt="" />{' '}
                  </button>
                  <button className="p-4 bg-[#2A56C629] rounded-full">
                    {' '}
                    <Image src={share} alt="" />{' '}
                  </button>
                </span>
              </span>
            </div>

            <div className="w-full">
              <p className="flex items-center gap-1 font-manrope text-xl font-semibold mb-2">
                <Image src={link} alt="" />
                Minting Details
              </p>

              <span className="border-2 border-gray-400 rounded-lg p-3 flex flex-col gap-5">
                <span className="flex w-full items-center justify-between">
                  <p className="font-manrope font-semibold">Minted At:</p>
                  <p className="font-manrope font-semibold">Jan 12, 2025</p>
                </span>

                <span className="flex w-full items-center justify-between">
                  <p className="font-manrope font-semibold">Network:</p>
                  <p className="font-manrope font-semibold">Ethereum</p>
                </span>

                <span className="flex w-full items-center justify-between">
                  <p className="font-manrope font-semibold">Project Name: </p>
                  <p className="font-manrope font-semibold">E-commerce site</p>
                </span>
              </span>
            </div>
          </div>
        </div>

        {/* SHARE ACHIEVEMENT */}
        <div>
            
        </div>
      </section>
    </main>
  );
};

export default MintSuccessPage;
