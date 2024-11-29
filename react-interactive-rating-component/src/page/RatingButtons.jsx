import React from 'react';

export default function RatingButtons({ onRatingSubmit }) {
  const [selected, setSelected] = React.useState(null);

  function select(index) {
    setSelected(index);
  }

  function handleSubmit() {
    selected ? onRatingSubmit(selected) : alert('Please select a rating!');
  }

  return (
    <div>
      <div className='text-light-gray flex items-center justify-between my-6 '>
        <button
          className={`p-3 w-10 h-10 ${
            selected === 1 ? 'bg-white text-black' : 'bg-dark-blue'
          } rounded-3xl flex items-center justify-center hover:bg-orange hover:text-black`}
          onClick={() => select(1)}
        >
          1
        </button>
        <button
          className={`p-3 w-10 h-10 ${
            selected === 2 ? 'bg-white text-black' : 'bg-dark-blue'
          } rounded-3xl flex items-center justify-center hover:bg-orange hover:text-black`}
          onClick={() => select(2)}
        >
          2
        </button>
        <button
          className={`p-3 w-10 h-10 ${
            selected === 3 ? 'bg-white text-black' : 'bg-dark-blue'
          } rounded-3xl flex items-center justify-center hover:bg-orange hover:text-black`}
          onClick={() => select(3)}
        >
          3
        </button>
        <button
          className={`p-3 w-10 h-10 ${
            selected === 4 ? 'bg-white text-black' : 'bg-dark-blue'
          } rounded-3xl flex items-center justify-center hover:bg-orange hover:text-black`}
          onClick={() => select(4)}
        >
          4
        </button>
        <button
          className={`p-3 w-10 h-10 ${
            selected === 5 ? 'bg-white text-black' : 'bg-dark-blue'
          } rounded-3xl flex items-center justify-center hover:bg-orange hover:text-black`}
          onClick={() => select(5)}
        >
          5
        </button>
      </div>
      <button
        className='bg-orange w-full rounded-3xl uppercase font-semibold py-2 hover:bg-white'
        onClick={handleSubmit}
      >
        submit
      </button>
    </div>
  );
}
