import Header from './Header';
import Hero from './Hero';
import Main from './Main';

export default function App() {
  return (
    <div className='m-auto md:max-w-md lg:grid grid-cols-2 grid-rows-4 lg:max-w-5xl'>
      <div className=''>
        <Header />
      </div>
      <div className='row-span-4'>
        <Hero />
      </div>
      <div className='row-span-2 '>
        <Main />
      </div>
    </div>
  );
}
