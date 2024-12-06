import Main from './Main';
import Form from './Form';

export default function App() {
  return (
    <div className='flex justify-center h-screen'>
      <div className='p-5 m-auto max-w-sm lg:max-w-4xl bg-bg-red font-work-sans'>
        <div className='bg-mobile-bg lg:bg-desktop-bg bg-cover max-w-sm lg:max-w-full lg:flex items-center'>
          <Main />
          <Form />
        </div>
      </div>
    </div>
  );
}
