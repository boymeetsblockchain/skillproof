const Home = () => {
  return (
    <main>
      <section className="hero-background flex flex-col items-center justify-center gap-10 h-[703px]">
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

        <div className="flex gap-12">
          <button className="button-style py-2 px-4 rounded-lg text-white font-bold font-manrope">
            Start building proof
          </button>
          <button className="button-style py-2 px-4 rounded-lg text-white font-bold font-manrope">
            View demo
          </button>
        </div>
      </section>
    </main>
  );
};

export default Home;
