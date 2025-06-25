import React from 'react';

const RequestVerification = () => {
  return (
    <>
      <main className="pb-20 px-20">
        <h1 className="text-center font-bold font-manrope text-4xl mt-15">
          Request Work Verification{' '}
        </h1>

        <section className="mt-20">
          <div className="flex items-center justify-between gap-20">
            <span className="flex flex-col gap-3 w-full">
              <label
                htmlFor="project-name"
                className="font-semibold text-2xl font-manrope"
              >
                {' '}
                Project Name{' '}
              </label>
              <input
                id="project-name"
                type="text"
                placeholder="E-commerce website"
                className="h-[44px] border-2 border-gray-200 rounded-lg px-4"
              />
            </span>

            <span className="flex flex-col gap-3 w-full">
              <label
                htmlFor="wallet-add"
                className="font-semibold text-2xl font-manrope"
              >
                {' '}
                Wallet Address
              </label>
              <input
                id="wallet-add"
                type="text"
                placeholder="E-commerce website"
                className="h-[44px] border-2 border-gray-200 rounded-lg px-4"
              />
            </span>
          </div>

          <div className="flex flex-col gap-3 mt-15">
            <label
              className="font-semibold text-2xl font-manrope"
              htmlFor="project-desc"
            >
              {' '}
              Project Description{' '}
            </label>
            <textarea
              name="project-desc"
              id="project-desc"
              placeholder="Describe the work that was completed..."
              className="h-[161px] border-2 border-gray-200 rounded-xl p-4 resize-none"
            />
          </div>

          <div className="flex items-center justify-between gap-20 mt-20">
            <span className="flex flex-col gap-3 w-full">
              <label
                htmlFor="completion-date"
                className="font-semibold text-2xl font-manrope"
              >
                {' '}
                Completion Date
              </label>
              <input
                id="completion-date"
                type="date"
                className="h-[44px] border-2 border-gray-200 rounded-lg px-4"
              />
            </span>

            <span className="flex flex-col gap-3 w-full">
              <label
                htmlFor="project-value"
                className="font-semibold text-2xl font-manrope"
              >
                {' '}
                Project Value
              </label>
              <input
                id="project-value"
                type="number"
                placeholder="E-commerce website"
                className="h-[44px] border-2 border-gray-200 rounded-lg px-4"
              />
            </span>
          </div>
        </section>

        <section className="mt-20">
          <h2 className="font-manrope font-semibold">
            {' '}
            On-chain Contributions{' '}
          </h2>

          <div className="flex items-center gap-5 mt-5">
            <span className="text-[#8E35EA] py-2 px-5 rounded-3xl bg-[#8E35EA45] border border-[#8E35EA45]">
              UI Design
            </span>
            <span className="text-[#8E35EA] py-2 px-5 rounded-3xl bg-[#8E35EA45] border border-[#8E35EA45]">
              Filecoin
            </span>
            <span className="text-[#8E35EA] py-2 px-5 rounded-3xl bg-[#8E35EA45] border border-[#8E35EA45]">
              JavaScript
            </span>

            <button className="font-semibold font-manrope border border-black rounded-lg py-2 px-5">
              +Add Skill
            </button>
          </div>

          <div className="flex items-center justify-between">
            <span className="flex flex-col gap-3 mt-10">
              <p className="font-manrope font-semibold">Attach Work Sample</p>
              <span className="border-2 border-dashed border-gray-200 h-[225px] w-[556px] flex justify-center items-center"></span>
            </span>
            <span className="flex flex-col gap-3 mt-10">
              <p className="font-manrope font-semibold">Project Link</p>
              <span className="border-2 border-dashed border-gray-200 h-[225px] w-[556px] flex justify-center items-center"></span>
            </span>
          </div>

          <div className="mt-10 flex justify-end">
            <button className="text-white rounded-lg bg-[#2A56C6] font-manrope font-bold py-2 px-5">
              Submit For Verification
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default RequestVerification;
