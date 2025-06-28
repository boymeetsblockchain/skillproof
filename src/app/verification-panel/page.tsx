import React from 'react';

const VerificationsPanel = () => {
  return (
    <main className="p-20">
      <h1 className="font-manrope font-bold text-2xl"> Veirifications </h1>

      <table className="mt-10 w-[90%] mx-auto">
        <thead className="flex w-full py-3 border-b-2 border-gray-300">
          <tr className="text-center text-gray-400 flex items-center justify-between w-full">
            <td className="w-full"> Project </td>
            <td className="w-full"> Client </td>
            <td className="w-full"> Submitted </td>
            <td className="w-full"> Value </td>
            <td className="w-full"> Status </td>
            <td className="w-full"> Actions </td>
          </tr>
        </thead>

        <tbody className="flex  flex-col w-full">
          <tr className="text-center  flex items-center justify-between w-full py-3 border-b-2 border-gray-400">
            <td>
              {' '}
              <span className="bg-[#2A56C652] text-[#000000] p-2 rounded-sm flex items-center justify-center h-8 w-8">
                {' '}
                1{' '}
              </span>{' '}
            </td>
            <td className="w-full"> E-commerce website </td>
            <td className="w-full"> Ali Express Market </td>
            <td className="w-full"> May 19, 2025 </td>
            <td className="w-full"> 5.0 ETH </td>
            <td className="w-full">
              {' '}
              <span className="py-1 px-2 text-[#286442F7] bg-[#78F9C6] rounded-md">
                {' '}
                Verified{' '}
              </span>{' '}
            </td>
            <td className="w-full"> Approved </td>
          </tr>

          <tr className="text-center flex items-center justify-between w-full py-3 border-b-2 border-gray-400">
            <td>
              {' '}
              <span className="bg-[#2A56C652] text-[#000000] p-2 rounded-sm flex items-center justify-center h-8 w-8">
                {' '}
                2{' '}
              </span>{' '}
            </td>
            <td className="w-full"> Decentralised Exchange </td>
            <td className="w-full"> Manybars </td>
            <td className="w-full"> May 19, 2025 </td>
            <td className="w-full"> 5.0 ETH </td>
            <td className="w-full">
              {' '}
              <span className="py-1 px-2 bg-[#A797303B] text-[#A79730D4] rounded-md">
                {' '}
                Pending{' '}
              </span>{' '}
            </td>
            <td className="w-full">
              {' '}
              Remind / <span> Cancel </span>{' '}
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
};

export default VerificationsPanel;
