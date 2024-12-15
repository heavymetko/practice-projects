import { useState } from 'react';

export default function Main({ onCalculate, sendResults }) {
  const [data, setData] = useState({
    amount: '',
    term: '',
    rate: '',
  });

  const [errors, setErrors] = useState({
    amount: '',
    term: '',
    rate: '',
    type: '',
  });

  const [selected, setSelected] = useState('');

  const select = (e) => {
    setSelected(() => e.target.value);
  };

  const clear = () => {
    setData({ amount: '', term: '', rate: '' });
    setErrors({
      amount: '',
      term: '',
      rate: '',
      type: '',
    });
    setSelected('');
    onCalculate(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    let formattedValue = value;

    if (name === 'amount') {
      const numericValue = value.replace(/[^0-9]/g, '');
      formattedValue = numericValue
        ? new Intl.NumberFormat('en-US').format(numericValue)
        : '';
    }

    if (name === 'term' && formattedValue.length > 2) {
      formattedValue = formattedValue.substring(0, 2);
    }

    if (name === 'rate') {
      if (parseFloat(formattedValue) > 100) {
        return;
      }
    }

    setData((prevData) => ({
      ...prevData,
      [name]: formattedValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};
    let valid = true;
    const errorMessage = 'This field is required';

    if (!data.amount) {
      newErrors.amount = errorMessage;
      valid = false;
    }

    if (!data.term) {
      newErrors.term = errorMessage;
      valid = false;
    }

    if (!data.rate) {
      newErrors.rate = errorMessage;
      valid = false;
    }

    if (!selected) {
      newErrors.type = errorMessage;
      valid = false;
    }
    setErrors(newErrors);
    if (valid) {
      const numericAmount = data.amount.replace(/,/g, '');
      const amountNumber = parseFloat(numericAmount);
      const termNumber = parseFloat(data.term);

      let p = amountNumber;
      let rate = data.rate / 100;
      let r = rate / 12;
      let n = termNumber * 12;
      const monthlyRepayments =
        (p * (r * Math.pow(1 + r, n))) / (Math.pow(1 + r, n) - 1);
      const totalRepayments = monthlyRepayments * n;
      const totalInterest = totalRepayments - amountNumber;

      let resultsData;

      if (selected === 'repayment') {
        resultsData = {
          monthly: Intl.NumberFormat('en-US').format(
            monthlyRepayments.toFixed(2)
          ),
          total: Intl.NumberFormat('en-US').format(totalRepayments.toFixed(2)),
          type: 'repayment',
        };
        sendResults(resultsData);
      }
      if (selected === 'interestOnly') {
        resultsData = {
          total: Intl.NumberFormat('en-US').format(totalInterest.toFixed(2)),
          type: 'interestOnly',
        };
        sendResults(resultsData);
      }
      onCalculate(true);
    }
  };

  return (
    <div className='p-5'>
      <div className='lg:flex justify-between'>
        <h1 className='text-lg font-semibold text-slate-900'>
          Mortgage Calculator
        </h1>
        <button
          className='text-xs text-slate-500 underline hover:text-slate-700 hover:font-semibold'
          onClick={clear}
        >
          Clear All
        </button>
      </div>

      <form className='mt-5' onSubmit={handleSubmit}>
        <div>
          <label className='text-slate-500' htmlFor='amount'>
            Mortgage Amount
          </label>
          <div
            className={`relative border ${
              errors.amount ? 'border-custom-red' : 'border-slate-500'
            } rounded-lg overflow-hidden mt-2`}
          >
            <span
              className={`absolute ${
                errors.amount
                  ? 'bg-custom-red text-white'
                  : 'bg-blue-100 text-slate-700'
              }  w-8 py-2 text-center `}
            >
              £
            </span>
            <input
              className='w-full border-none outline-none pl-10 py-2 '
              type='text'
              id='amount'
              name='amount'
              value={data.amount}
              onChange={handleChange}
            />
          </div>
          <p className='text-custom-red text-sm mt-2'>{errors.amount}</p>
        </div>

        <div className='flex flex-col lg:flex-row lg:gap-4'>
          <div className='mt-5'>
            <label className='text-slate-500' htmlFor='term'>
              Mortgage Term
            </label>
            <div
              className={`relative border ${
                errors.term ? 'border-custom-red' : 'border-slate-500'
              } rounded-lg overflow-hidden mt-2`}
            >
              <span
                className={`absolute ${
                  errors.term
                    ? 'bg-custom-red text-white'
                    : 'bg-blue-100 text-slate-700'
                } right-0 w-14 py-2 text-center`}
              >
                years
              </span>
              <input
                className='w-full border-none outline-none pl-2 py-2'
                type='number'
                id='term'
                name='term'
                value={data.term}
                onChange={handleChange}
              />
            </div>
            <p className='text-custom-red text-sm mt-2'>{errors.term}</p>
          </div>

          <div className='mt-5'>
            <label className='text-slate-500' htmlFor='rate'>
              Interest Rate
            </label>
            <div
              className={`relative border ${
                errors.rate ? 'border-custom-red' : 'border-slate-500'
              }  rounded-lg overflow-hidden mt-2`}
            >
              <span
                className={`absolute ${
                  errors.rate
                    ? 'bg-custom-red text-white'
                    : 'bg-blue-100 text-slate-700'
                } right-0 w-10 py-2 text-center `}
              >
                %
              </span>
              <input
                className='w-full border-none outline-none pl-2 py-2'
                type='number'
                id='rate'
                name='rate'
                value={data.rate}
                onChange={handleChange}
              />
            </div>
            <p className='text-custom-red text-sm mt-2'>{errors.rate}</p>
          </div>
        </div>

        <div className='mt-5'>
          <label className='text-slate-500'>Mortgage Type</label>
          <div className='flex flex-col gap-3 text-slate-900 '>
            <div
              className={`border rounded-lg overflow-hidden mt-2 py-2 px-4 flex gap-4 ${
                selected === 'repayment'
                  ? 'bg-lime-light border-lime accent-lime '
                  : 'border-slate-500'
              }`}
            >
              <input
                className='hover:cursor-pointer'
                type='radio'
                id='option1'
                value='repayment'
                name='mortgageType'
                onChange={select}
                checked={selected === 'repayment'}
              />
              <label
                className='font-semibold hover:cursor-pointer'
                htmlFor='option1'
              >
                Repayment
              </label>
            </div>
            <div
              className={`border rounded-lg overflow-hidden py-2 px-4 flex gap-4 ${
                selected === 'interestOnly'
                  ? 'bg-lime-light border-lime accent-lime '
                  : 'border-slate-500'
              }
              `}
            >
              <input
                className='hover:cursor-pointer'
                type='radio'
                id='option2'
                value='interestOnly'
                name='mortgageType'
                onChange={select}
                checked={selected === 'interestOnly'}
              />
              <label
                className='font-semibold hover:cursor-pointer'
                htmlFor='option2'
              >
                Interest Only
              </label>
            </div>
          </div>
          <p className='text-custom-red text-sm mt-2'>{errors.type}</p>
        </div>

        <button
          className='mt-5 bg-lime w-full p-3 font-semibold text-slate-900 flex gap-3 items-center justify-center rounded-full hover:bg-lime-2'
          type='submit'
        >
          <img src='src/assets/icon-calculator.svg' alt='calculator icon' />
          Calculate Repayments
        </button>
      </form>
    </div>
  );
}
