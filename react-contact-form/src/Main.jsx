import { useState } from 'react';

export default function Main({ onSubmit }) {
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });
  const [error, setError] = useState({
    firstName: '',
    lastName: '',
    email: '',
    query: '',
    message: '',
    check: '',
  });

  const [selected, setSelected] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const select = (e) => {
    setSelected(e.target.value);
  };

  const toggle = () => {
    setIsChecked((prevIsChecked) => !prevIsChecked);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let valid = true;
    let newErrors = {};

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!data.firstName) {
      newErrors.firstName = 'This field is required';
      valid = false;
    }
    if (!data.lastName) {
      newErrors.lastName = 'This field is required';
      valid = false;
    }
    if (!data.email) {
      newErrors.email = 'This field is required';
      valid = false;
    } else if (!emailRegex.test(data.email)) {
      newErrors.email = 'Please enter a valid email address';
      valid = false;
    }
    if (!selected) {
      newErrors.query = 'Please select a query type';
      valid = false;
    }
    if (!data.message) {
      newErrors.message = 'This field is required';
      valid = false;
    }
    if (!isChecked) {
      newErrors.check =
        'To submit this form, please consent to being contacted';
      valid = false;
    }
    if (valid) {
      console.log('Submitted!');
      setData({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
      });
      setSelected('');
      setIsChecked(false);
      setError({});
      onSubmit();
    } else {
      setError(newErrors);
    }
  };

  return (
    <div className='text-dark-gray'>
      <h1 className='text-2xl font-bold mb-4'>Contact Us</h1>
      <form className='flex flex-col' onSubmit={handleSubmit}>
        <div className='flex flex-col lg:flex-row lg:gap-5'>
          <div className='flex flex-col lg:w-1/2 mb-4'>
            <label className='mb-2' htmlFor='firstName'>
              First Name <span className='text-medium-green'>*</span>
            </label>
            <input
              className={`border ${
                error.firstName ? 'border-custom-red' : 'border-medium-gray'
              } p-2 rounded-md`}
              type='text'
              name='firstName'
              value={data.firstName}
              onChange={handleChange}
            />
            <p className='text-custom-red text-sm mt-2'>{error.firstName}</p>
          </div>
          <div className='flex flex-col lg:w-1/2 mb-4'>
            <label className='mb-2' htmlFor='lastName'>
              Last Name <span className='text-medium-green'>*</span>
            </label>
            <input
              className={`border ${
                error.lastName ? 'border-custom-red' : 'border-medium-gray'
              } p-2 rounded-md`}
              type='text'
              name='lastName'
              value={data.lastName}
              onChange={handleChange}
            />
            <p className='text-custom-red text-sm mt-2'>{error.lastName}</p>
          </div>
        </div>
        <div className='flex flex-col mb-4'>
          <label className='mb-2' htmlFor='email'>
            Email Address <span className='text-medium-green'>*</span>
          </label>
          <input
            className={`border ${
              error.email ? 'border-custom-red' : 'border-medium-gray'
            } p-2 rounded-md`}
            type='text'
            name='email'
            value={data.email}
            onChange={handleChange}
          />
          <p className='text-custom-red text-sm mt-2'>{error.email}</p>
        </div>
        <div className='mb-4'>
          <label htmlFor='radios'>
            Query Type <span className='text-medium-green'>*</span>
          </label>
          <div
            className={`border border-medium-gray py-2 px-5 rounded-md mt-2 cursor-pointer ${
              selected === 'Option 1' ? 'bg-light-green' : ''
            }`}
          >
            <input
              className='cursor-pointer'
              type='radio'
              value='Option 1'
              checked={selected === 'Option 1'}
              onChange={select}
              id='option1'
            />
            <label className='ml-4 cursor-pointer' htmlFor='option1'>
              General Enquiry
            </label>
          </div>
          <div
            className={`border border-medium-gray py-2 px-5 rounded-md mt-4 cursor-pointer ${
              selected === 'Option 2' ? 'bg-light-green' : ''
            }`}
          >
            <input
              className='cursor-pointer'
              type='radio'
              value='Option 2'
              checked={selected === 'Option 2'}
              onChange={select}
              id='option2'
            />
            <label className='ml-4 cursor-pointer' htmlFor='option2'>
              Support Request
            </label>
          </div>
          <p className='text-custom-red text-sm mt-2'>{error.query}</p>
        </div>
        <label className='mb-2' htmlFor='message'>
          Message <span className='text-medium-green'>*</span>
        </label>

        <div className='flex flex-col mb-8'>
          <textarea
            className={`border ${
              error.message ? 'border-custom-red' : 'border-medium-gray'
            } p-2 rounded-md h-40`}
            name='message'
            id='message'
            value={data.message}
            onChange={handleChange}
          ></textarea>
          <p className='text-custom-red text-sm mt-2'>{error.message}</p>
        </div>
        <div className='mb-8'>
          <input
            className='cursor-pointer'
            type='checkbox'
            checked={isChecked}
            onChange={toggle}
            id='checkbox'
          />
          <label className='ml-4 cursor-pointer' htmlFor='checkbox'>
            I consent to being contacted by the team{' '}
            <span className='text-medium-green'>*</span>
          </label>
          <p className='text-custom-red text-sm mt-2'>{error.check}</p>
        </div>
        <button
          className='text-lg bg-medium-green py-4 text-white rounded-md hover:bg-dark-gray'
          type='submit'
        >
          Submit
        </button>
      </form>
    </div>
  );
}
