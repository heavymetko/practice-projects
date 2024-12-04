export default function Modal({ shareclick }) {
  return (
    <div className='relative'>
      <div className='flex h-16 items-center gap-4 bg-dark-grayish-blue px-8 rounded-b-lg lg:h-12 lg:rounded-lg'>
        <p className='text-grayish-blue uppercase tracking-widest'>share</p>
        <img
          className='hover:scale-110 cursor-pointer'
          src='src/assets/icon-facebook.svg'
          alt='facebook icon'
        />
        <img
          className='hover:scale-110 cursor-pointer'
          src='src/assets/icon-twitter.svg'
          alt='twitter icon'
        />
        <img
          className='hover:scale-110 cursor-pointer'
          src='src/assets/icon-pinterest.svg'
          alt=''
        />
        <button
          className='bg-desturated-dark-blue p-3 rounded-full ml-auto lg:hidden'
          onClick={shareclick}
        >
          <svg xmlns='http://www.w3.org/2000/svg' width='15' height='13'>
            <path
              fill='white'
              d='M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z'
            />
          </svg>
        </button>
      </div>
      <div
        className=''
        style={{
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          bottom: '-9px',
          width: 0,
          height: 0,
          borderLeft: '10px solid transparent',
          borderRight: '10px solid transparent',
          borderTop: '10px solid hsl(217, 19%, 35%)',
        }}
      ></div>
    </div>
  );
}
