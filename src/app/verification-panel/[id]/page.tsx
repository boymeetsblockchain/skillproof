//IMPORTING HELPER COMPONENTS
import Header from '@/app/components/header';
import Image from 'next/image';

//IMPORTING PAGE ASSETS
import workVeri from '../../../../public/work-veri.png';
import clock from '../../../../public/clock.png';
import person from '../../../../public/person.png';
import briefcase from '../../../../public/briefcase.png';
import miniWallet from '../../../../public/mini-wallet.png';
import file from '../../../../public/file.png';
import approve from '../../../../public/approve.png';
import reject from '../../../../public/reject.png';
import warning from '../../../../public/warning.png';
import download from '../../../../public/download.png';

const ClientVerificationPage = () => {
  return (
    <>
      <Header />
      <main className="py-10 px-10">
        <section className="flex items-center gap-2">
          <Image src={workVeri} alt="" />
          <span>
            <p className="font-manrope font-semibold text-3xl">
              Work Verification
            </p>
            <p className="font-manrope">Review and sign completed work</p>
          </span>
        </section>

        <section className="mt-20 bg-[#D9D9D980] rounded-2xl p-10 flex flex-col gap-10">
          <div className="flex items-center justify-between px-5">
            <span className="flex flex-col gap-3">
              <h1 className="font-manrope font-bold text-2xl">
                E-commerce website
              </h1>
              <span className="flex items-center gap-5">
                <span className="flex items-center gap-1">
                  <Image src={person} alt="" />
                  <p className="font-manrope text-gray-500">Jubiu Duke</p>
                </span>

                <span className="flex items-center gap-1">
                  <Image src={briefcase} alt="" />
                  <p className="font-manrope text-gray-500">
                    Completed May 10, 25
                  </p>
                </span>

                <span className="flex items-center gap-1">
                  <Image src={clock} alt="" />
                  <p className="font-manrope text-gray-500">
                    {' '}
                    Submitted May 10, 25
                  </p>
                </span>
              </span>
            </span>

            <span className="font-manrope text-[#A79730D4] font-bold text-2xl bg-[#A797303B] py-1 px-3 rounded-lg">
              Pending Verification
            </span>
          </div>

          <div className="bg-white rounded-2xl p-5">
            <span className="flex items-center gap-1">
              <Image src={miniWallet} alt="" />
              <p className="font-manrope">Freelancer wallet address</p>
            </span>

            <p className="font-semibold font-manrope text-xl mt-2">
              0x45d3..........Z3d
            </p>
          </div>
        </section>

        <section className="flex gap-8">
          <section className="w-[65%]">
            <div className="mt-20 bg-[#D9D9D980] rounded-2xl p-10 flex flex-col gap-3">
              <h1 className="font-manrope font-bold text-2xl">
                {' '}
                Project Description{' '}
              </h1>
              <div className="bg-white p-4">
                <p className="font-manrope">
                  Redesigned the entire e-commerce platform with modern UI/IX
                  principles, implemented responsive design, and optimized for
                  mobile devices. Added new product filtering system and
                  improved checkout flow. The product included comprehensive
                  user research, wireframing, prototyping, and final
                  implementation with React and Tailwind CSS
                </p>
              </div>
            </div>

            <div className="mt-10 bg-[#D9D9D980] rounded-2xl p-10 flex flex-col gap-5">
              <h1 className="font-manrope font-bold text-2xl">
                {' '}
                Technologies Used{' '}
              </h1>

              <div className="flex items-center gap-5">
                <span className="border border-black rounded-lg p-2 text-2xl font-manrope font-semibold">
                  React
                </span>
                <span className="border border-black rounded-lg p-2 text-2xl font-manrope font-semibold">
                  TypeScript
                </span>
                <span className="border border-black rounded-lg p-2 text-2xl font-manrope font-semibold">
                  UI/UX Design
                </span>
                <span className="border border-black rounded-lg p-2 text-2xl font-manrope font-semibold">
                  Responsive Design
                </span>
              </div>
            </div>

            <div className="mt-10 rounded-2xl p-10 flex flex-col gap-5 border border-gray-400">
              <h1 className="font-manrope font-bold text-2xl">
                {' '}
                Submitted files{' '}
              </h1>

              <div>
                <span className="flex items-center justify-between border border-black rounded-lg px-8 py-6">
                  <span className="flex flex-col gap-1  ">
                    <span className="flex items-center gap-1">
                      <Image src={file} alt="" />
                      <p className="font-semibold font-manrope">
                        Final-design.zip
                      </p>
                    </span>
                    <p className="font-semibold font-manrope text-gray-500">
                      5.2MB
                    </p>
                  </span>

                  <button className="font-manrope font-semibold text-[#2A56C6] flex items-center gap-3">
                    <Image src={download} alt="" />
                    Download
                  </button>
                </span>
              </div>
            </div>
          </section>

          {/* asides */}
          <aside className="w-[35%]">
            <div className="mt-20 bg-[#D9D9D980] rounded-2xl p-10 flex flex-col gap-3">
              <h1 className="font-manrope font-bold text-2xl">
                {' '}
                Verification Actions{' '}
              </h1>

              <div>
                <p className="font-manrope font-semibold text-lg mb-3">
                  Add Comment (Optional)
                </p>
                <textarea
                  placeholder="Leave a comment for the freelancer"
                  className="resize-none h-[123px] border border-gray-400 rounded-xl p-4 w-full"
                />
              </div>

              <div className="flex items-center justify-center gap-5">
                <button className="font-manrope font-bold text-lg text-white bg-[#258634] rounded-sm py-2 px-6 flex items-center gap-2">
                  <Image src={approve} alt="" /> Approve
                </button>

                <button className="font-manrope font-bold text-lg text-white bg-[#DF2020] rounded-sm py-2 px-6 flex items-center gap-2">
                  <Image src={reject} alt="" /> Reject
                </button>
              </div>
            </div>

            <div className="mt-10 bg-[#FFFBEB] border border-[#FDE68A] rounded-2xl p-10 flex flex-col gap-3">
              <span className="flex items-center gap-1">
                <Image src={warning} alt="" />
                <h1 className="font-manrope font-bold text-2xl text-[#924727]">
                  Before you sign
                </h1>
              </span>

              <ul className="flex flex-col gap-3 list-disc pl-8">
                <li className="font-manrope text-[#924727]">
                  {' '}
                  Review all submitted files carefully{' '}
                </li>
                <li className="font-manrope text-[#924727]">
                  {' '}
                  Signing is irreversible and will mint an NFT{' '}
                </li>
                <li className="font-manrope text-[#924727]">
                  {' '}
                  The freelancer will receive payment proof{' '}
                </li>
              </ul>
            </div>

            <div className="mt-10 bg-[#D9D9D980] rounded-2xl p-10 flex flex-col gap-3">
              <h1 className="font-manrope font-bold text-2xl mb-10">
                {' '}
                Project Summary{' '}
              </h1>

              <div className="flex flex-col gap-4">
                <span className="flex justify-between items-center">
                  <p className="font-manrope font-bold text-gray-500">
                    Files Submitted
                  </p>
                  <p className="font-manrope font-bold">4</p>
                </span>

                <span className="flex justify-between items-center">
                  <p className="font-manrope font-bold text-gray-500">
                    Skills Used
                  </p>
                  <p className="font-manrope font-bold">4</p>
                </span>

                <span className="flex justify-between items-center">
                  <p className="font-manrope font-bold text-gray-500">
                    Completion Date
                  </p>
                  <p className="font-manrope font-bold">10th May, 2025</p>
                </span>
              </div>
            </div>
          </aside>
        </section>
      </main>
    </>
  );
};

export default ClientVerificationPage;
