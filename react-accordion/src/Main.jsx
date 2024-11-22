import React from 'react';

export default function Main(props) {
  const [isOpen, setIsOpen] = React.useState(false);

  function toggle() {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }

  return (
    <div className='border-b last:border-none'>
      <div className='flex items-center justify-between my-4 '>
        <p
          onClick={toggle}
          className='w-72 lg:w-96 text-sm font-bold hover:text-grayPurple cursor-pointer'
        >
          {props.question}
        </p>
        <button
          onClick={toggle}
          className='w-10 h-10 flex items-center justify-center ml-5'
        >
          <img
            className='w-8 h-8'
            src={`./src/assets/icon-${isOpen ? 'minus' : 'plus'}.svg`}
            alt=''
          />
        </button>
      </div>
      {isOpen && <p className='mb-5 text-sm text-gray-400'>{props.answer}</p>}
    </div>
  );
}
