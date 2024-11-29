import SuccessHeader from './SuccessHeader';
import SuccessMain from './SuccessMain';

export default function SuccessPage({ rating }) {
  return (
    <div className='flex flex-col items-center'>
      <SuccessHeader />
      <SuccessMain rating={rating} />
    </div>
  );
}
