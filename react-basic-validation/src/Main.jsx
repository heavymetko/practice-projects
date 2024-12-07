import { useState } from 'react';

export default function Main() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!email) {
      setError('Email cannot be empty');
    } else if (!emailRegex.test(email)) {
      setError('Please provide a valid email address');
    } else {
      setError('');
      setEmail('');
    }
  };

  return (
    <div className='mb-36 lg:mb-20'>
      <div className='p-4 flex flex-col items-center'>
        <img
          className='w-16 pt-16 pb-12'
          src='src/assets/logo.svg'
          alt='ping logo'
        />
        <h1 className='text-3xl lg:text-5xl mb-4 text-custom-gray'>
          We are launching <span className='text-black font-bold'> soon!</span>{' '}
        </h1>
        <p className='mb-8 text-sm lg:text-lg'>Subscribe and get notified</p>
        <form
          className='relative flex flex-col items-center justify-center lg:flex-row gap-4 w-full mb-16 '
          action=''
        >
          <input
            className={`border-2 ${
              error ? 'border-light-red' : 'border-pale-blue'
            } lg:${
              error ? 'border-light-red' : 'border-gray-200'
            } rounded-3xl py-3 pl-8 w-full lg:w-2/3`}
            type='email'
            value={email}
            placeholder='Your email address...'
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className='lg:absolute top-16 left-9 text-sm italic text-light-red -mt-3'>
            {error ? <p>{error}</p> : ''}
          </div>

          <button
            className='bg-custom-blue text-white rounded-3xl py-3 w-full lg:w-1/3 hover:bg-custom-blue-light'
            onClick={handleClick}
          >
            Notify Me
          </button>
        </form>
      </div>
      <img src='src/assets/illustration-dashboard.png' alt='' />
    </div>
  );
}
