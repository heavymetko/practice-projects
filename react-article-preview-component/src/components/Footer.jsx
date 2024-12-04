import React from 'react';

const Footer = React.forwardRef(({ shareclick }, ref) => {
  return (
    <div className='flex items-center text-sm h-16'>
      <img
        className='w-12 h-12 rounded-full mr-5'
        src='src/assets/avatar-michelle.jpg'
        alt='autor profile picture'
      />
      <div className='flex flex-col flex-1'>
        <p className='text-dark-grayish-blue font-semibold'>
          Michelle Appleton
        </p>
        <p className='text-desturated-dark-blue'>28 Jun 2020</p>
      </div>
      <button ref={ref} onClick={shareclick}>
        <img
          className='bg-light-grayish-blue p-3 rounded-full'
          src='src/assets/icon-share.svg'
          alt='share icon'
        />
      </button>
    </div>
  );
});
export default Footer;
