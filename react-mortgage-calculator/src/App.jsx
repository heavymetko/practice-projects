import Main from './main';
import ResultsEmpty from './ResultsEmpty';
import ResultsCompleted from './ResultsCompleted';
import { useState } from 'react';

export default function App() {
  const [isCalculated, setIsCalculated] = useState('');
  const [results, setResults] = useState('');

  const handleCalculate = (e) => {
    setIsCalculated(e);
  };

  return (
    <div className='bg-blue-100 h-screen lg:p-10'>
      <div className='max-w-sm lg:max-w-3xl flex flex-col lg:flex-row m-auto font-jakarta bg-white lg:rounded-xl'>
        <div className='lg:w-1/2'>
          <Main onCalculate={handleCalculate} sendResults={setResults} />
        </div>

        <div
          className={
            isCalculated
              ? 'transition-all duration-500 ease-in-out opacity-100 lg:w-1/2'
              : 'opacity-0 overflow-hidden max-h-0 max-w-0'
          }
        >
          <ResultsCompleted getResults={results} />
        </div>
        {!isCalculated && (
          <div className='lg:w-1/2'>
            <ResultsEmpty />
          </div>
        )}
      </div>
    </div>
  );
}
