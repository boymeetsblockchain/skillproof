//IMPORTING HELPER COMPONENTS
import Image from 'next/image';

//IMPORTING PAGE ASSETS
import completeWork from '../../public/complete-work.png';
import getVerification from '../../public/get-verification.png';
import mintProof from '../../public/mint-proof.png';
import next from '../../public/next.png';

const Home = () => {
  return (
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
          SkillProof helps freelancers verify completed work through NFTs signed
          by clients- building a trustworthy without relying on traditional
          resumes or reviews
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
    </main>
  );
};

export default Home;
