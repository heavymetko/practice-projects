export default function Hero() {
  return (
    <div>
      <img
        className='lg:hidden w-full '
        src='./src/assets/hero-mobile.jpg'
        alt=''
      />
      <img
        className='hidden lg:block'
        src='./src/assets/hero-desktop.jpg'
        alt=''
      />
    </div>
  );
}
