import Header from './Header';
import Hero from './Hero';
import Main from './Main';

export default function App() {
  return (
    <div className='m-auto md:max-w-md lg:grid grid-cols-2 grid-rows-3 lg:max-w-5xl lg:bg-desktop-background lg:bg-cover'>
      <div className=''>
        <Header />
      </div>
      <div className='row-span-3'>
        <Hero />
      </div>
      <div className='row-span-2 '>
        <Main />
      </div>
    </div>
  );
}
