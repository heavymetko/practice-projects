import React from 'react';
import Page from './page/Page';
import SuccessPage from './succesPage/SuccessPage';

export default function App() {
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [selectedRating, setSelectedRating] = React.useState(null);

  function handleRatingSubmit(rating) {
    setSelectedRating(rating);
    setIsSubmitted(true);
  }

  return (
    <div className='bg-black h-screen flex items-center justify-center p-2'>
      <div className='p-6 max-w-sm bg-very-dark-blue font-workSans rounded-2xl'>
        {!isSubmitted ? (
          <Page onRatingSubmit={handleRatingSubmit} />
        ) : (
          <SuccessPage rating={selectedRating} />
        )}
      </div>
    </div>
  );
}
