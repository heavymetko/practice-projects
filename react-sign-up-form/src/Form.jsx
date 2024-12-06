import { useState } from 'react';

export default function Form() {
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    });

    let valid = true;
    let newErrors = {};

    if (!data.firstName) {
      newErrors.firstName = 'First Name cannot be empty';
      valid = false;
    }

    if (!data.lastName) {
      newErrors.lastName = 'Last Name cannot be empty';
      valid = false;
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!data.email) {
      newErrors.email = 'Email cannot be empty';
      valid = false;
    } else if (!emailRegex.test(data.email)) {
      newErrors.email = 'Looks like this is not an email';
      valid = false;
    }

    if (!data.password) {
      newErrors.password = 'Password cannot be empty';
      valid = false;
    }

    if (valid) {
      console.log('Submitted!');
      setData({ firstName: '', lastName: '', email: '', password: '' });
      console.log(data);
    } else {
      setErrors(newErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  return (
    <div className='lg:w-1/2'>
      <button className='bg-btn-blue text-md lg:text-xs text-white px-20 py-4 rounded-lg mb-6 shadow-sharp w-full'>
        <span className='font-bold'>Try it free 7 days</span> then $20/mo.
        thereafter
      </button>
      <form className='bg-white p-4 rounded-lg shadow-sharp' action=''>
        <div className='relative mt-3'>
          <input
            className={`${
              errors.firstName ? 'border-2 border-bg-red' : 'border-2'
            } px-4 py-4 lg:py-2 rounded-md placeholder-dark-blue w-full`}
            type='text'
            placeholder='First Name'
            value={data.firstName}
            name='firstName'
            onChange={handleChange}
          />
          {errors.firstName && (
            <img
              className='absolute inset-y-0 right-3 top-1/2 transform -translate-y-1/2'
              src='src/assets/icon-error.svg'
              alt='error icon'
            />
          )}
        </div>
        {errors.firstName && (
          <p className='text-bg-red italic text-right text-xxs mt-1'>
            {errors.firstName}
          </p>
        )}

        <div className='relative mt-3'>
          <input
            className={`${
              errors.lastName ? 'border-2 border-bg-red' : 'border-2'
            } px-4 py-4 lg:py-2 rounded-md placeholder-dark-blue w-full`}
            type='text'
            placeholder='Last Name'
            value={data.lastName}
            name='lastName'
            onChange={handleChange}
          />
          {errors.lastName && (
            <img
              className='absolute inset-y-0 right-3 top-1/2 transform -translate-y-1/2'
              src='src/assets/icon-error.svg'
              alt='error icon'
            />
          )}
        </div>
        {errors.lastName && (
          <p className='text-bg-red italic text-right text-xxs mt-1'>
            {errors.lastName}
          </p>
        )}

        <div className='relative mt-3'>
          <input
            className={`${
              errors.email ? 'border-2 border-bg-red' : 'border-2'
            } px-4 py-4 lg:py-2 rounded-md placeholder-dark-blue w-full`}
            type='text'
            placeholder='Email Address'
            value={data.email}
            name='email'
            onChange={handleChange}
          />
          {errors.email && (
            <img
              className='absolute inset-y-0 right-3 top-1/2 transform -translate-y-1/2'
              src='src/assets/icon-error.svg'
              alt='error icon'
            />
          )}
        </div>
        {errors.email && (
          <p className='text-bg-red italic text-right text-xxs mt-1'>
            {errors.email}
          </p>
        )}

        <div className='relative mt-3'>
          <input
            className={`${
              errors.password ? 'border-2 border-bg-red' : 'border-2'
            } px-4 py-4 lg:py-2 rounded-md placeholder-dark-blue w-full`}
            type='text'
            placeholder='Password'
            value={data.password}
            name='password'
            onChange={handleChange}
          />
          {errors.password && (
            <img
              className='absolute inset-y-0 right-3 top-1/2 transform -translate-y-1/2'
              src='src/assets/icon-error.svg'
              alt='error icon'
            />
          )}
        </div>
        {errors.password && (
          <p className='text-bg-red italic text-right text-xxs mt-1'>
            {errors.password}
          </p>
        )}

        <button
          className='bg-btn-green w-full uppercase text-lg lg:text-sm text-white mt-8 py-4 lg:py-2 rounded-md shadow-sharp-green hover:bg-btn-hover-green hover:shadow-sharp-light-green'
          onClick={handleSubmit}
        >
          Claim your free trial
        </button>
        <p className='text-grayish-blue text-xxs text-center font-semibold px-8 py-4'>
          By clicking the button, you are agreeing to{' '}
          <br className='lg:hidden' /> our
          <a className='text-bg-red font-bold' href='#'>
            {' '}
            Terms and Services
          </a>
        </p>
      </form>
    </div>
  );
}
