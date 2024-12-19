export default function Header() {
  return (
    <div>
      <div className='lg:hidden flex items-center justify-center mb-6'>
        <div className='relative'>
          <img
            className='w-60 '
            src='src/assets/bg-pattern-mobile.svg'
            alt=''
            aria-hidden='true'
          />
        </div>
        <img
          className='absolute top-12 w-60'
          src='src/assets/illustration-woman-online-mobile.svg'
          alt=''
          aria-hidden='true'
        />
      </div>
      <div className=' hidden lg:block relative'>
        <img className='' src='src/assets/bg-pattern-desktop.svg' alt='' />
        <img
          className='absolute top-0 w-60'
          src='src/assets/illustration-woman-online-desktop.svg'
          alt=''
          aria-hidden='true'
        />
      </div>
    </div>
  );
}
