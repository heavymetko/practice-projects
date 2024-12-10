import { useEffect, useRef, useState } from 'react';
import Main from './main';
import Modal from './Modal';

export default function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const modalRef = useRef(null);

  const handleFormSubmit = () => {
    setIsSubmitted(true);
  };

  const closeModal = () => {
    setIsSubmitted(false);
  };

  useEffect(() => {
    if (isSubmitted) {
      const clickOutside = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
          closeModal();
        }
      };

      document.addEventListener('mousedown', clickOutside);
      return () => {
        document.removeEventListener('mousedown', clickOutside);
      };
    }
  }, [isSubmitted]);

  return (
    <div className='bg-light-green p-8 relative'>
      <div className='bg-white max-w-sm lg:max-w-3xl m-auto font-karla p-4 rounded-xl'>
        <Main onSubmit={handleFormSubmit} />

        <div
          className={`absolute top-0 left-1/2 transform -translate-x-1/2 transition-opacity duration-300 ease-in-out ${
            isSubmitted ? 'opacity-100' : 'opacity-0'
          }`}
          ref={modalRef}
        >
          <Modal />
        </div>
      </div>
    </div>
  );
}
