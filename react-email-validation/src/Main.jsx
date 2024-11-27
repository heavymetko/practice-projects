import React from 'react';
export default function Main() {
  const [email, setEmail] = React.useState('');
  const [error, setError] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email) {
      setError('Email cannot be empty');
    } else if (!emailRegex.test(email)) {
      setError('Please provide a valid email');
    } else {
      setError('');
      setEmail('');
    }
  };

  return (
    <div className='p-9 lg:px-6 md:max-w-md md:m-auto lg:ml-10 font-josefinSans flex flex-col items-center max-w-sm m-auto '>
      <div className='text-center text-3xl uppercase tracking-xlwide md:text-4xl lg:text-left lg:text-5xl '>
        <h1 className=' text-desturatedRed font-light'>
          We're
          <span className='text-black font-semibold'> coming soon</span>
        </h1>
      </div>

      <p className='text-sm text-center text-desturatedRed mt-4 mb-8 lg:text-left '>
        Hello fellow shoppers! We're currently building our new fashion store.
        Add your email below to stay up-to-date with announcements and our
        launch deals.
      </p>
      <form className='w-full' action='' onSubmit={handleSubmit}>
        <div
          className={`flex items-center ${
            error
              ? 'border-red-500 border-2 border-r-0'
              : 'border-desturatedRedLight'
          } border rounded-3xl h-10`}
        >
          <input
            className='flex-1 text-xs placeholder:text-desturatedRedLight px-4 rounded-l-3xl focus:outline-none'
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email Address'
            aria-label='Enter your email address'
          />
          {error && (
            <img
              className='mr-3'
              src='./src/assets/icon-error.svg'
              alt='red error exclamation mark'
            />
          )}
          <button
            type='submit'
            className='h-10 px-6 rounded-3xl bg-gradient-light-pink hover:bg-hover-pink flex items-center justify-center '
          >
            <img src='./src/assets/icon-arrow.svg' alt='arrow button' />
          </button>
        </div>
        {error && <p className='text-softRed text-xs px-4 py-2'>{error}</p>}
      </form>
    </div>
  );
}
