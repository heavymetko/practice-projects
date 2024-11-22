import Header from './Header';
import Main from './main';
import data from './data';

export default function App() {
  const faqElements = data.map((item) => {
    return <Main key={item.id} question={item.question} answer={item.answer} />;
  });
  return (
    <div className='font-workSans'>
      <div className='h-60 bg-[url(./src/assets/background-pattern-mobile.svg)] lg:bg-[url(./src/assets/background-pattern-desktop.svg)] bg-cover'></div>
      <div className='bg-pink-100 h-screen'>
        <div className='w-full max-w-xxs sm:max-w-sm  lg:max-w-lg p-5 bg-white m-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg'>
          <Header />
          {faqElements}
        </div>
      </div>
    </div>
  );
}
