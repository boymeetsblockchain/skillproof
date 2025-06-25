'use client';

//IMPORTING HELPER COMPONENTS
import Image from 'next/image';
import Header from './components/header';
import Footer from './components/footer';

//IMPORTING HOOKS
import { useRouter } from 'next/navigation';

//IMPORTING PAGE ASSETS
import completeWork from '../../public/complete-work.png';
import getVerification from '../../public/get-verification.png';
import mintProof from '../../public/mint-proof.png';
import next from '../../public/next.png';

import walletLogin from '../../public/login.png';
import clVeri from '../../public/cl-verification.png';
import globalPort from '../../public/global-port.png';
import instaMint from '../../public/inst-mint.png';
import easyInt from '../../public/easy-int.png';
import pubSkiGallery from '../../public/pub-skill.png';

import chainWallet from '../../public/chain-wallet.png';

import workClient from '../../public/work-client.png';

const Home = () => {
  const router = useRouter();

  const workAsAClient = () => {
    router.push('/client-verification');
  };

  return (
    <>
      <Header />
      <main>
        <section className="hero-background flex flex-col items-center justify-center gap-8 h-[703px]">
          <p className="font-bold font-manrope text-[#BE2BD8] border border-[#2A56C6] rounded-sm p-1">
            Web3 Work Verification
          </p>
          <h1 className="text-6xl font-manrope font-extrabold  text-white">
            {' '}
            Mint Your Skills as <span className="text-[#659CF4]">NFT</span>{' '}
            <span className="text-[#9370DC]">Proof</span>{' '}
          </h1>
          <p className="text-white">
            SkillProof helps freelancers verify completed work through NFTs
            signed by clients- building a trustworthy without relying on
            traditional resumes or reviews
          </p>

          <div className="flex gap-8">
            <button className="button-style py-2 px-4 rounded-lg text-white font-bold font-manrope">
              Start building proof
            </button>
            <button className="button-style py-2 px-4 rounded-lg text-white font-bold font-manrope">
              View demo
            </button>
          </div>
        </section>

        {/* HOW IT WORKS SECTION */}
        <section className="mt-30">
          <h1 className="text-center font-manrope font-bold text-3xl mb-5">
            {' '}
            How SkillProof Works{' '}
          </h1>
          <p className="text-center w-[512px] mx-auto mb-5">
            Three simple steps to transform your completed work into permanent,
            verifiable credentials
          </p>
          <div className="flex gap-3 items-center px-10">
            <span className="flex flex-col justify-center items-center gap-3 h-[331px] w-[426px] border border-black rounded-lg p-4">
              <Image src={completeWork} alt="" />
              <p className="font-manrope font-semibold text-base">
                {' '}
                Complete work{' '}
              </p>
              <p className="text-center font-manrope text-base ">
                {' '}
                Finish your freelance project and deliver exceptional{' '}
                <span className="text-[#8E35EA]">
                  results to your client as usual.
                </span>{' '}
              </p>
            </span>

            <div>
              <Image src={next} alt="" />
            </div>

            <span className="flex flex-col justify-center items-center gap-3 h-[331px] w-[426px] border border-black rounded-lg p-4">
              <Image src={getVerification} alt="" />
              <p className="font-manrope font-semibold text-base">
                Get <span className="text-[#2A56C6]">Verification</span>
              </p>
              <p className="text-center font-manropr text-base">
                Client reviews and digitally signs off on your completed work
                through our secure platform.
              </p>
            </span>

            <div>
              <Image src={next} alt="" />
            </div>

            <span className="flex flex-col justify-center items-center gap-3 h-[331px] w-[426px] border border-black rounded-lg p-4">
              <Image src={mintProof} alt="" />
              <p className="font-manrope font-semibold text-base">
                Mint <span className="text-[#8E35EA]">NFT</span> Proof
              </p>
              <p className="text-center font-manropr text-base">
                Automatically Mint an NFT certificate with project details,{' '}
                <span className="text-[#8E35EA]">
                  permanently stored on blockchain.
                </span>
              </p>
            </span>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section className="mt-30 bg-[#F1F1F1] p-10">
          <h1 className="text-center font-manrope font-bold text-3xl mb-5">
            {' '}
            SkillProof Features{' '}
          </h1>
          <p className="text-center w-[512px] mx-auto mb-5">
            Everything you need to build and showcase your professional
            reputation on-chain.
          </p>

          <div className="flex gap-5 flex-wrap">
            <span className="flex flex-col justify-center h-[356px] w-[calc(33.333%-1.25rem)] bg-white p-10 gap-4 ">
              <Image src={walletLogin} alt="" />
              <p className="font-bold font-manrope text-xl">
                Wallet-Based Login
              </p>
              <p className="font-medium font-manrope">
                Connect with MetaMask or any wallet to verify and own your
                work—no passwords needed.
              </p>
            </span>

            <span className="flex flex-col justify-center h-[356px] w-[calc(33.333%-1.25rem)] bg-white p-10 gap-4">
              <Image src={clVeri} alt="" />
              <p className="font-bold font-manrope text-xl">
                Client Verification
              </p>
              <p className="font-medium font-manrope">
                Secure digital signatures from clients provide authentic proof
                of work completion.
              </p>
            </span>

            <span className="flex flex-col justify-center h-[356px] w-[calc(33.333%-1.25rem)] bg-white p-10 gap-4">
              <Image src={globalPort} alt="" />
              <p className="font-bold font-manrope text-xl">Global Portfolio</p>
              <p className="font-medium font-manrope">
                Showcase your verified work history to client worldwide with
                blockchain-backed proof.
              </p>
            </span>

            <span className="flex flex-col justify-center h-[356px] w-[calc(33.333%-1.25rem)] bg-white p-10 gap-4">
              <Image src={instaMint} alt="" />
              <p className="font-bold font-manrope text-xl">
                {' '}
                Instant Minting{' '}
              </p>
              <p className="font-medium font-manrope">
                Automated NFT creation upon client verification with low gas
                fees and fast processing.
              </p>
            </span>

            <span className="flex flex-col justify-center h-[356px] w-[calc(33.333%-1.25rem)] bg-white p-10 gap-4">
              <Image src={easyInt} alt="" />
              <p className="font-bold font-manrope text-xl">
                {' '}
                Easy Integration{' '}
              </p>
              <p className="font-medium font-manrope">
                Simple tools for client to verify work without needing deep web3
                knowledge.
              </p>
            </span>

            <span className="flex flex-col justify-center h-[356px] w-[calc(33.333%-1.25rem)] bg-white p-10 gap-4">
              <Image src={pubSkiGallery} alt="" />
              <p className="font-bold font-manrope text-xl">
                {' '}
                Public Skill Gallery{' '}
              </p>
              <p className="font-medium font-manrope">
                Explore verified work from real freelancers. Browse Skill NFTs
                tied to real contributions.
              </p>
            </span>
          </div>
        </section>

        {/* YOUR SKILLS SECTION */}
        <section className="py-20 p-10 bg-[#F1F1F1]">
          <div className="flex justify-between items-center mb-10">
            <p className="font-manrope text-xl font-bold">Your Skills NFTs</p>

            <span className="flex items-center gap-4">
              <input
                type="text"
                placeholder="Search NFTs..."
                className="border border-gray-200 rounded-lg py-1 px-3"
              />
              <button className="border border-gray-300 rounded-lg font-bold font-manrope py-1 px-3">
                {' '}
                All Skills{' '}
              </button>
            </span>
          </div>

          <div className="flex justify-between">
            {/* SKILL ITEM */}
            <span className="flex flex-col w-[407px] border border-gray-200 rounded-lg">
              <Image src={chainWallet} alt="" />

              <span className="p-4 flex flex-col gap-5">
                <span className="flex items-center justify-between">
                  <p className="font-bold font-manrope">
                    Crypto Wallet Integration
                  </p>
                  <p className="bg-[#78F9C6] text-[#286442F7] py-1 px-5 rounded-lg font-semibold">
                    Verified
                  </p>
                </span>

                <p className="mb-3">
                  Integrated multi-chain wallet functionality into client’s
                  existing platform with enhanced security.
                </p>

                <span className="flex justify-between">
                  <p className="bg-[#6C51D93D] text-[#8E35EA] py-1 px-3 rounded-lg">
                    Web3.js
                  </p>
                  <p className="bg-[#6C51D93D] text-[#8E35EA] py-1 px-3 rounded-lg">
                    Web3.js
                  </p>
                  <p className="bg-[#6C51D93D] text-[#8E35EA] py-1 px-3 rounded-lg">
                    Web3.js
                  </p>
                </span>
                <span className="flex justify-between mb-10">
                  <p> Client: Blockchain solutions </p>
                  <p>Value: 3 ETH</p>
                </span>
              </span>
            </span>

            {/* SKILL ITEM */}
            <span className="flex flex-col w-[407px] border border-gray-200 rounded-lg">
              <Image src={chainWallet} alt="" />

              <span className="p-4 flex flex-col gap-5">
                <span className="flex items-center justify-between">
                  <p className="font-bold font-manrope">
                    Crypto Wallet Integration
                  </p>
                  <p className="bg-[#78F9C6] text-[#286442F7] py-1 px-5 rounded-lg font-semibold">
                    Verified
                  </p>
                </span>

                <p className="mb-3">
                  Integrated multi-chain wallet functionality into client’s
                  existing platform with enhanced security.
                </p>

                <span className="flex justify-between">
                  <p className="bg-[#6C51D93D] text-[#8E35EA] py-1 px-3 rounded-lg">
                    Web3.js
                  </p>
                  <p className="bg-[#6C51D93D] text-[#8E35EA] py-1 px-3 rounded-lg">
                    Web3.js
                  </p>
                  <p className="bg-[#6C51D93D] text-[#8E35EA] py-1 px-3 rounded-lg">
                    Web3.js
                  </p>
                </span>
                <span className="flex justify-between mb-10">
                  <p> Client: Blockchain solutions </p>
                  <p>Value: 3 ETH</p>
                </span>
              </span>
            </span>

            {/* SKILL ITEM */}
            <span className="flex flex-col w-[407px] border border-gray-200 rounded-lg">
              <Image src={chainWallet} alt="" />

              <span className="p-4 flex flex-col gap-5">
                <span className="flex items-center justify-between">
                  <p className="font-bold font-manrope">
                    Crypto Wallet Integration
                  </p>
                  <p className="bg-[#78F9C6] text-[#286442F7] py-1 px-5 rounded-lg font-semibold">
                    Verified
                  </p>
                </span>

                <p className="mb-3">
                  Integrated multi-chain wallet functionality into client’s
                  existing platform with enhanced security.
                </p>

                <span className="flex justify-between">
                  <p className="bg-[#6C51D93D] text-[#8E35EA] py-1 px-3 rounded-lg">
                    Web3.js
                  </p>
                  <p className="bg-[#6C51D93D] text-[#8E35EA] py-1 px-3 rounded-lg">
                    Web3.js
                  </p>
                  <p className="bg-[#6C51D93D] text-[#8E35EA] py-1 px-3 rounded-lg">
                    Web3.js
                  </p>
                </span>
                <span className="flex justify-between mb-10">
                  <p> Client: Blockchain solutions </p>
                  <p>Value: 3 ETH</p>
                </span>
              </span>
            </span>
          </div>

          <div className="flex justify-center">
            {' '}
            <button className="border-2 border-gray-300 py-1 px-5 rounded-lg mt-5">
              {' '}
              Load more NFTs{' '}
            </button>{' '}
          </div>
        </section>

        {/* VERIFY WORK AS A CLIENT */}
        <section className="flex items-center justify-between p-10 ">
          <div className="flex flex-col gap-3">
            <h1 className="font-manrope font-bold text-xl">
              Verify work as a client
            </h1>
            <p className="w-[700px]">
              Are you a client who needs to verify a freelancer’s work? Connect
              your wallet to access pending Verification requests.
            </p>
            <button
              onClick={workAsAClient}
              className="accessory-button text-white rounded-lg py-1 px-3 w-[160px] cursor-pointer"
            >
              Connect as a client
            </button>
          </div>

          <div>
            <Image src={workClient} alt="" />
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default Home;
