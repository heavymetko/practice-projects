type Props = {
  question: string;
  answer: string;
  onToggle: () => void;
  isOpen: boolean;
};

export default function Main({ question, answer, onToggle, isOpen }: Props) {
  return (
    <div className='px-6 lg:p-0'>
      <div className='border-b'>
        <div className='flex justify-between select-none'>
          <p
            className={`${
              isOpen ? 'font-bold ml-1' : 'text-darker-custom-blue'
            } py-4 hover:text-custom-red hover:cursor-pointer`}
            onClick={onToggle}
          >
            {question}
          </p>
          <button onClick={onToggle}>
            <img
              className={isOpen ? 'rotate-180' : ''}
              src='src/assets/icon-arrow-down.svg'
              alt='Toggle arrow'
            />
          </button>
        </div>
        {isOpen && <p className='mb-4 text-dark-custom-blue'>{answer}</p>}
      </div>
    </div>
  );
}
