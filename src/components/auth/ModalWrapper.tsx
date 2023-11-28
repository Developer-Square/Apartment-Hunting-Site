import React from 'react';

type Props = {
  children: React.ReactNode;
  title: string;
  icon: string;
  handleLoginModal: any;
  height?: string;
};

const ModalWrapper = ({
  title,
  icon,
  height,
  children,
  handleLoginModal,
}: Props) => {
  return (
    <div className='justify-center items-end md:items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none text-black'>
      <div
        className={`relative h-full w-full ${height} md:w-[90%] lg:w-[80%] xl:w-[60%] 2xl:max-w-[640px] mt-6 md:mt-0 mx-auto`}
      >
        {/*content*/}
        <div className='border-0 h-full md:rounded-xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none text-sm'>
          {/*header*/}
          <div className='flex items-center w-full h-12 mt-2 px-4 border-b border-black/[.1]'>
            <i
              className={`fa-solid ${icon} cursor-pointer`}
              onClick={() => {
                handleLoginModal();
              }}
            ></i>
            <p className='text-sm text-center mx-auto'>{title}</p>
          </div>
          {/*body*/}
          <div className='max-h-[100vh] px-6 overflow-y-scroll text-base'>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalWrapper;
