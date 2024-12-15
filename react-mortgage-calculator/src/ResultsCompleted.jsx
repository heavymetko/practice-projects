export default function ResultsCompleted({ getResults }) {
  return (
    <div className='bg-slate-700 p-7 flex flex-col h-full lg:rounded-r-xl lg:rounded-bl-extra'>
      <h2 className='text-white text-lg font-semibold'>Your results</h2>
      <p className='text-slate-300 text-sm mt-2'>
        Your results are shown below based on the information you provided. To
        adjust the results, edit the form and click “calculate repayments”
        again.
      </p>
      <div className='bg-slate-900 border-t-2 border-lime rounded-t rounded-b-lg mt-6 p-5'>
        {getResults.type === 'repayment' && (
          <div>
            <p className='text-slate-300 text-sm mt-2'>
              Your monthly repayments
            </p>
            <p className='text-lime text-4xl font-bold my-3'>{`£${getResults.monthly}`}</p>
            <hr className='border-slate-500' />
          </div>
        )}
        <p
          className={`text-slate-300 text-sm ${
            getResults.type === 'interestOnly' ? 'my-2' : 'mt-3'
          }`}
        >
          {`Total ${
            getResults.type === 'interestOnly' ? 'interest' : "you'll repay"
          }  over the term`}
        </p>
        <p className='text-white text-2xl font-bold my-3'>{`£${getResults.total}`}</p>
      </div>
    </div>
  );
}
