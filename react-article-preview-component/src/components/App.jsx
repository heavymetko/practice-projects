import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Modal from './Modal';
import React, { useEffect, useRef, useState } from 'react';

export default function App() {
  const buttonRef = useRef(null);
  const [modalPosition, setModalPosition] = useState({
    top: 0,
    left: 0,
  });
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  function updateModalPosition() {
    if (window.innerWidth >= 1024 && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setModalPosition({
        top: rect.top + window.scrollY - 70,
        left: rect.left + window.scrollX - 95,
      });
    }
  }

  function handleClick() {
    if (!isModalOpen) {
      updateModalPosition();
    }
    setIsModalOpen((prevIsModalOpen) => !prevIsModalOpen);
  }

  useEffect(() => {
    if (isModalOpen) {
      window.addEventListener('resize', updateModalPosition);
    }
    return () => {
      window.addEventListener('resize', updateModalPosition);
    };
  }, [isModalOpen]);

  return (
    <div className='bg-light-grayish-blue h-screen p-6 flex'>
      <div className='bg-white flex flex-col max-w-sm font-work-sans m-auto rounded-b-lg lg:flex-row lg:max-w-3xl lg:rounded-t-lg'>
        <Header />
        <div className='px-8'>
          <Main />
          <div className={`${isModalOpen ? 'hidden' : 'block'} lg:block`}>
            <Footer ref={buttonRef} shareclick={handleClick} />
          </div>
        </div>
        {isModalOpen && (
          <div
            className='lg:absolute'
            style={{
              position: 'lg:absolute',
              top: modalPosition.top,
              left: modalPosition.left,
            }}
          >
            <Modal shareclick={handleClick} />
          </div>
        )}
      </div>
    </div>
  );
}
