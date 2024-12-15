export default function ResultsEmpty() {
  return (
    <div className='bg-slate-700 p-7 flex flex-col items-center h-full justify-center lg:rounded-r-xl lg:rounded-bl-extra'>
      <img src='src/assets/illustration-empty.svg' alt='Empty illustration' />
      <h2 className='text-white text-lg font-semibold'>Results shown here</h2>
      <p className='text-slate-300 text-sm text-center mt-2'>
        Complete the form and click “calculate repayments” to see what your
        monthly repayments would be.
      </p>
    </div>
  );
}
