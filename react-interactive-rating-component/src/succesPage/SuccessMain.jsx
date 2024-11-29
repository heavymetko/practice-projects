export default function SuccessMain({ rating }) {
  return (
    <main className='text-center'>
      <p className='text-orange py-2 px-4 bg-dark-blue inline-block rounded-3xl my-8'>
        You selected <span>{rating}</span> out of 5
      </p>
      <h2 className='text-white text-2xl mb-4'>Thank you!</h2>
      <p className='text-light-gray text-sm'>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </main>
  );
}
