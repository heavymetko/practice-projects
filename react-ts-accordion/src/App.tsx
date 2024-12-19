import Main from './Main';
import Header from './Header';
import data from './data';
import { useState } from 'react';

export default function App() {
  const [currentOpenId, setCurrentOpenId] = useState<number | null>(null);

  const toggleAccordion = (id: number) => {
    setCurrentOpenId((prevId) => (prevId === id ? null : id));
  };

  const datas = data.map((d) => (
    <Main
      question={d.question}
      answer={d.answer}
      key={d.id}
      onToggle={() => toggleAccordion(d.id)}
      isOpen={currentOpenId === d.id}
    />
  ));
  return (
    <div className='py-40 px-6 bg-gradient-to-b from-soft-violet to-soft-blue h-full'>
      <div className='lg:flex items-center lg:max-w-3xl lg:h-customHeight lg:p-10 max-w-sm border m-auto bg-white rounded-3xl pb-12'>
        <div className='lg:w-1/3'>
          <Header />
        </div>
        <div className='lg:w-2/3 lg:ml-14'>
          <h1 className='text-4xl text-center lg:text-left font-semibold mb-6'>
            FAQ
          </h1>
          <div className='lg:h-80'>{datas}</div>
        </div>
      </div>
    </div>
  );
}
